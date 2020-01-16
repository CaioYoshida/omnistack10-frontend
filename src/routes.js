import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './pages/App/App'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  );
}
