import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './pages/App/App';
import UpdateDev from './pages/UpdateDev';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/updatedevs" component={UpdateDev} />
    </Switch>
  );
}
