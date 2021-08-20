import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { store } from 'react-notifications-component';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../context/auth';
import ICredentialsDev from '../../interfaces/credentialsDev';
import { Container, Content, Background, Form, FormActions } from './styles';

const SingInDev: React.FC = () => {
  const { user, signInDev } = useContext(AuthContext);
  const [model, setModel] = useState<ICredentialsDev>({
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model],
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // não mandar antes que eu set os dados
      try {
        await signInDev(model);
        store.addNotification({
          title: 'Sucesso!',
          message: 'Login de sucesso',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
        // history.push('/logindev');
      } catch (err) {
        store.addNotification({
          title: 'Error!',
          message: 'Email ou senha incorretos',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      }
    },
    [model, signInDev],
  );

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Container>
        <Content>
          <Form onSubmit={onSubmit}>
            <h1>Login com Dev</h1>
            <Input
              icon={FaEnvelope}
              placeholder="Email"
              type="email"
              name="email"
              value={model.email}
              onChange={updateModel}
              required
            />
            <Input
              icon={FaKey}
              placeholder="Senha"
              isPassword
              required
              name="password"
              value={model.password}
              onChange={updateModel}
              type="password"
            />
            <Button type="submit">Entrar</Button>
            <FormActions>
              <Link to="/cadastrodev">Faça seu Cadastro</Link>
              <Link to="/">Voltar</Link>
            </FormActions>
          </Form>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SingInDev;
