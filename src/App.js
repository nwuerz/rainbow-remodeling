import withRoot from './withRoot';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from "react-router-dom";
import Estimate from './pages/Estimate';

function App() {



  return (
    <>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/estimate"]}>
          <Estimate />
        </Route>
      </Switch>
    </>
  );
}

export default withRoot(App);
