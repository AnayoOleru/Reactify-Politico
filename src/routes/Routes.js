import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from '../components/pages/home-page.jsx';
import Signup from '../components/pages/sign-up.jsx';
import Signin from '../components/pages/sign-in.jsx';
import PartiesPage from '../components/pages/party-page.jsx';
import candidates from '../components/pages/candidates-page.jsx';
import officesForResult from '../components/pages/govOffice-page.jsx';
import NotFound from '../components/pages/404-page.jsx';
import Result from '../components/pages/election-results.jsx';
import addParties from '../components/pages/adminPages/add-parties.jsx';
import addOffice from '../components/pages/adminPages/add-govOffice.jsx';
import { Parties } from '../components/pages/adminPages/parties.jsx';
import { Office } from '../components/pages/adminPages/office.jsx';
import register from '../components/pages/adminPages/register-candidate.jsx';
import EditParty from '../components/pages/adminPages/edit-party.jsx';
import DeleteParty from '../components/pages/adminPages/delete-party.jsx';
import signout from '../components/pages/signout-page.jsx';
import { Provider } from 'react-redux';
import store  from '../store';
class App extends Component{

   render (){
     return (
    <Router>
    <Switch>
    <React.Fragment>
  <Route exact path="/sign-out" component={signout} />
  <Route exact path="/parties" component={PartiesPage} />
  <Route exact path="/office/:officeid/result" component={Result} />
  <Route exact path="/add-party" component={addParties} />
  <Route exact path="/candidates" component={candidates} />
  <Route exact path="/add-office" component={addOffice} />
  <Route exact path="/result" component={officesForResult} />
  <Route exact path="/register" component={register} />
  <Route exact path="/all-offices" component={Office} />
  <Route exact path="/all-parties" component={Parties} />
  <Route exact path="/parties/:id/name" component={EditParty} />
  <Route exact path="/parties/:id/delete" component={DeleteParty} />
  <Route exact path="/sign-up/" component={Signup} />
  <Route exact path="/sign-in" component={Signin} />
  <Route exact path="/" component={homePage} />
  {/* <Route path="*" component={NotFound} /> */}
  </React.Fragment>
    </Switch>
  </Router>
     );
   }
}
export default App;
