import React, { Component } from 'react';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';

import '../styles/signup.style.css';


export default class SignUp extends Component {
  render() {
    return (
        <React.Fragment>
        <SignUpNavBar />
        <h1 className="header">Sign up</h1>
    <form className="form" id="addpost" >
        <p className="input1">Image
            <input type="text" id="file" placeholder="logoUrl" required />
            </p>
            <p className="input1">Firstname
            <input type="text" id="file" placeholder="firstname" required />
            </p>
            <p className="input1">Lastname
            <input type="text" id="file" placeholder="lastname" required />
            </p>
            <p className="input1">Othername
            <input type="text" id="file" placeholder="othername" required />
            </p>
            <p className="input1">Email
            <input type="text" id="file" placeholder="e.g john@doe.com" required />
            </p>
            <p className="input1">Phone
            <input type="text" id="file" placeholder="07069583653" required />
            </p>
            <p className="input1">Password
            <input type="text" id="file" placeholder="****" required />
            </p>
            <div id="result" />
        <p><input id="button" type="submit" value="Create an account" /></p>
    </form>
    <p align="center">Already have an account? <a href="sign-in.html">sign in</a></p>
        </React.Fragment>
    );
  }
}
