import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from '../components/pages/home-page.jsx';
import Signup from '../components/pages/sign-up.jsx';
import Signin from '../components/pages/sign-in.jsx';
import { Provider } from 'react-redux';
import store  from '../store';
class App extends Component{

   render (){
     return (
       <Provider store ={store} >
    <Router>
    <Switch>
    <React.Fragment>
  <Route path="/" component={homePage} />
  <Route path="/sign-up" component={Signup} />
  <Route path="/sign-in" component={Signin} />
  </React.Fragment>
    </Switch>
  </Router>
       </Provider>

     );
   }
}
export default App;
