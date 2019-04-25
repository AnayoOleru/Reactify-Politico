import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../store';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';
import validateB4Submission from '../../validation/validateB4Submission';

import '../styles/signup.style.css';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailError: false,
      isPasswordError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // in here before the component loads
  // show spinner

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    // const result = validateB4Submission(userInput);
    // if(!result) {
    //   // eslint-disable-next-line no-console
    //   console.log('Inputs must be valid before submission');
    // }
    // here shore the spinner(add)

    // clear the state
    this.setState({
      email: '',
      password: '',
      isEmailError: false,
      isPasswordError: false,
    });

      const data = {
      email: userInput.email,
      password: userInput.password,
      };
       
      // console.log(data, 'data');

      fetch('https://trustpolitico.herokuapp.com/api/v1/auth/login', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ 
        email: data.email, 
        password: data.password
    })
    }).then((response) => response.json())
    .then(res => {
      console.log(res);
      if(res.ok){
        console.log('success');
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const {
      email,
      password,
      isEmailError,
      isPasswordError,
    } = this.state;
    // setup the loader
    return (
      <Provider store={store}>
        <React.Fragment>
        <SignUpNavBar />
        <h1 className="header">Sign up</h1>
    <form className="form" id="addpost" onSubmit={this.handleSubmit}>
            <p className="input1">Email
            <input type="text" id="file" placeholder="e.g john@doe.com" name = 'email'
         onChange = {this.onChange}  value= { email } required />
            </p>
        
            { isEmailError ? (<small className="invalid-feedback-show i-f"> Email not valid </small>)
  : null }
            <p className="input1">Password
            <input type="text" id="file" placeholder="****" name = 'password'
         onChange = {this.onChange} value= { password } required />
            </p>

            { isPasswordError ? (<small className="invalid-feedback-show i-f"> Email not valid </small>)
  : null }

            <div id="result" />
        <p><input id="button" type="submit" value="Sign in" /></p>
    </form>
    <p align="center">Already have an account?
    <Link to="/sign-up">sign up</Link></p>
        </React.Fragment>
        </Provider>
    );
  }
}

export default SignIn;
