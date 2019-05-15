import React, { Component } from 'react';
import { Link } from 'react-router';
import {  withRouter } from 'react-router-dom';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { SignupAction } from '../../actions/postActions';
import store from '../../store';
import validateB4Submission from '../../validation/validateB4Submission';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passportUrl: '',
      firstname: '',
      lastname: '',
      othername: '',
      email: '',
      phonenumber: '',
      password: '',
      isEmailError: false,
      isPasswordError: false,
      isPhoneError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = this.state;
    const result = validateB4Submission(userInput);
    if (!result) {
      return swal({
        icon: 'warning',
        title: 'Inputs Must be Valid Before Submission',
      });
    }

    // do this, clear state
    // clear the state
    this.setState({
      passportUrl: '',
      firstname: '',
      lastname: '',
      othername: '',
      email: '',
      phonenumber: '',
      password: '',
      isEmailError: false,
      isPasswordError: false,
      isPhoneError: false,
    });

      const data = {
      passportUrl: userInput.passportUrl,
      firstname: userInput.firstname,
      lastname: userInput.lastname,
      othername: userInput.othername,
      email: userInput.email,
      phonenumber: userInput.phonenumber,
      password: userInput.password,
      };
       
      console.log(data, 'data');

      // Call Action
      this.props.SignupAction(data);
  }
  render() {
    const {token, success} = this.props;
    if (success) {
      console.log(success);
      swal({
        icon: 'success',
        title: 'Signup successful',
      });
      this.props.history.push('/parties');
    }

    const {
      passportUrl,
      firstname,
      lastname,
      othername,
      email,
      phonenumber,
      password,
      isEmailError,
      isPasswordError,
      isPhoneError,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>
        <SignUpNavBar />
        <h1 className="header">Sign up</h1>
    <form className="form" id="addpost" onSubmit={this.handleSubmit} >

        <p className="input1">Image
            <input type="text"
            id="file"
            placeholder="logoUrl"
            name="passportUrl"
            onChange={this.onChange}
            value={ passportUrl }
            required />
            </p>

            <p className="input1">Firstname
            <input type="text"
            id="file"
            placeholder="firstname"
            name="firstname"
            onChange={this.onChange}
            value={ firstname }
            required />
            </p>

            <p className="input1">Lastname
            <input type="text"
            id="file"
            placeholder="lastname"
            name="lastname"
            onChange={this.onChange}
            value={ lastname }
            required />
            </p>

            <p className="input1">Othername
            <input type="text"
            id="file"
            placeholder="othername"
            name="othername"
            onChange={this.onChange}
            value={ othername }
            required />
            </p>

            <p className="input1">Email
            <input type="text"
            id="file"
            placeholder="e.g john@doe.com"
            name="email"
            onChange={this.onChange}
            value={ email }
            required />
            </p>

{ isEmailError ? (<small className="invalid-feedback-show i-f"> Email not valid </small>)
  : null }
            <p className="input1">Phone
            <input type="text"
            id="file"
            placeholder="07069583653"
            name="phonenumber"
            onChange={this.onChange}
            value={ phonenumber }
            required />
            </p>

{ isPhoneError ? (<small className="invalid-feedback-show i-f"> Not a valid Nigerian phone number </small>)
: null }

            <p className="input1">Password
            <input type="text"
            id="file"
            placeholder="****"
            name="password"
            onChange={this.onChange}
            value={ password }
            required />
            </p>

{ isPasswordError ? (<small className="invalid-feedback-show i-f"> Password not valid </small>)
: null }

            <div id="result" />
        <p><input id="button" type="submit" value="Create an account" /></p>
    </form>
    <p align="center">Already have an account?
    <Link to="/sign-in">sign in</Link></p>
        </React.Fragment>
      </Provider>

    );
  }
}

const mapStateToProps = ({posts}) =>({
  success: posts.success,
  token: posts.token
});

SignUp.propTypes = {
  SignupAction:  PropTypes.func.isRequired,
  success:  PropTypes.bool.isRequired
} 

export default connect(mapStateToProps,  { SignupAction })(withRouter( SignUp));
