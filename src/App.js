import withRoot from './withRoot';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from "react-router-dom";
import Estimate from './pages/Estimate';
import Claims from './pages/Claims';
import Gallery from './pages/Gallery';
import Referral from './pages/Referral';
import ProgramTerms from './pages/ProgramTerms';

function App() {

  return (
    <>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home}/>
        <Route exact path={["/estimate"]} component={Estimate}/>
        <Route exact path={["/claims"]} component={Claims}/>
        <Route exact path={["/gallery"]} component={Gallery}/>
        <Route exact path={["/referral"]} component={Referral}/>
        <Route exact path={["/terms"]} component={ProgramTerms}/>
      </Switch>
    </>
  );
}

export default withRoot(App);
