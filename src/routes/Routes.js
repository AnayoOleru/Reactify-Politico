import React from 'react';
import { Route, IndexRoute } from 'react-router';
import homePage from '../components/pages/home-page.jsx';
import Signup from '../components/pages/sign-up.jsx';
import Signin from '../components/pages/sign-in.jsx';

export default (
  <React.Fragment>
  <Route path="/" component={homePage} />
  <Route path="/sign-up" component={Signup} />
  <Route path="/sign-in" component={Signin} />

  </React.Fragment>
);
