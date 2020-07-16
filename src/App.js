import withRoot from './withRoot';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from "react-router-dom";
import Estimate from './pages/Estimate';
import Claims from './pages/Claims';

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
        <Route>
          <Claims exact path={["/claims"]}/>
        </Route>
      </Switch>
    </>
  );
}

export default withRoot(App);
