import React from 'react';
import { Route, IndexRoute } from 'react-router';
import homePage from '../components/pages/home-page.jsx';
import Signup from '../components/pages/sign-up.jsx';

export default (
  <React.Fragment>
  <Route path="/" component={homePage} />
  <Route path="/sign-up" component={Signup} />
  </React.Fragment>
);
