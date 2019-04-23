import React from 'react';
import { Route, IndexRoute } from 'react-router';
import homePage from '../components/pages/home-page.jsx';
import About from '../components/pages/sign-in.jsx';

export default (
  <React.Fragment>
  <Route path="/" component={homePage} />
  <Route path="/about" component={About} />
  </React.Fragment>
);
