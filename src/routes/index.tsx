import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Start from '../pages/Start';
import SignInDev from '../pages/SingInDev';
import SignInClient from '../pages/SingInClient';
import SingUpDev from '../pages/SignUpDev';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/logindev" exact component={SignInDev} />
      <Route path="/cadastrodev" exact component={SingUpDev} />
      <Route path="/loginClient" exact component={SignInClient} />

      <Redirect to="/" />
      {/* se eu percorreto todo as rotas e nao achar nada eu volto pra principal */}
    </Switch>
  );
};

export default Routes;
