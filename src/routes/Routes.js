import React from 'react';
import { Route, IndexRoute } from 'react-router';
import homePage from '../components/pages/home-page.jsx';

export default (
  <React.Fragment>
  <Route path="/" component={homePage} />
  </React.Fragment>
);
