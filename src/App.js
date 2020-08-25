import React from 'react';
import ROUTES from './Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        {
          ROUTES.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
