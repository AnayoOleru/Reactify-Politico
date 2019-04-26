import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from '../components/pages/home-page.jsx';
import Signup from '../components/pages/sign-up.jsx';
import Signin from '../components/pages/sign-in.jsx';
import Parties from '../components/pages/party-page.jsx';
import addParties from '../components/pages/add-party.jsx';
import userVote from '../components/pages/user-vote.jsx';
import registerUser from '../components/pages/register-user-page.jsx';
import { Provider } from 'react-redux';
import store  from '../store';
class App extends Component{

   render (){
     return (
       <Provider store ={store} >
    <Router>
    <Switch>
    <React.Fragment>
  <Route exact path="/" component={homePage} />
  <Route exact path="/sign-up" component={Signup} />
  <Route exact path="/sign-in" component={Signin} />
  <Route exact path="/parties" component={Parties} />
  <Route exact path="/add-party" component={addParties} />
  <Route exact path="/vote" component={userVote} />
  <Route exact path="/register/user" component={registerUser} />
  </React.Fragment>
    </Switch>
  </Router>
       </Provider>

     );
   }
}
export default App;
