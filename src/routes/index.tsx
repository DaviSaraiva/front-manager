import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Start from '../pages/Start';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Redirect to="/" />
      {/* se eu percorreto todo as rotas e nao achar nada eu volto pra principal */}
    </Switch>
  );
};

export default Routes;
