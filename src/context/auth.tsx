import React, { createContext, useCallback, useState } from 'react';
import ICredentialsDev from '../interfaces/credentialsDev';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  active: boolean;
  create_at: Date | string;
  update_at: Date | string;
}

interface IAuthContextState {
  // metodos e variaveis que vou disponibilizar globalmente pra minha aplicação
  user: IUser;
  signInDev(credentials: ICredentialsDev): Promise<void>;
}

interface IAuthState {
  token: string;
  user: IUser;
}

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('ProjetcManagerToken');
    const user = localStorage.getItem('ProjetcManagerUser');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as IAuthState;
  });
  const signInDev = useCallback(async (credentials: ICredentialsDev) => {
    const response = await api.post('/sessions', credentials);
    const { token, user } = response.data;
    localStorage.setItem('ProjetcManagerToken', token);
    localStorage.setItem('ProjetcManagerUser', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signInDev, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};
