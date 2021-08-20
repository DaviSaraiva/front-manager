import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { AppProvider } from './context';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotification />
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
