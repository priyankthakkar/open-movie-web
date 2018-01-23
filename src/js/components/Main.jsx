import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './Landing';
import MovieDetails from './MovieDetails';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/details" component={MovieDetails} />
  </Switch>
);

export default Main;
