import React, { Component } from 'react';
import { Link } from 'react-router';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';

import '../styles/signup.style.css';


export default class SignUp extends Component {
  render() {
    return (
        <React.Fragment>
        <SignUpNavBar />
        <h1 className="header">Sign up</h1>
    <form className="form" id="addpost" >
            <p className="input1">Email
            <input type="text" id="file" placeholder="e.g john@doe.com" required />
            </p>
            <p className="input1">Password
            <input type="text" id="file" placeholder="****" required />
            </p>
            <div id="result" />
        <p><input id="button" type="submit" value="Sign in" /></p>
    </form>
    <p align="center">Already have an account?
    <Link to="/sign-up">sign up</Link></p>
        </React.Fragment>
    );
  }
}
