import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createPost } from '../../actions/postActions';
import store from '../../store';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';
import validateB4Submission from '../../validation/validateB4Submission';
import { validateInputs } from '../../validation/validateInputs';


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
  }
  componentDidMount() {
    swal({
      icon: 'success',
      title: 'Welcome back, please sign in',
    });
  }
  
  ShowSpinner = () => {
    return this.setState({ loading: true });
  }
  validate = (e) => {
    const result = validateInputs(e.target.name, e.target.value);
    if (!result[1]) this.setState({ [result[0]]: true });
    if (result[1]) this.setState({ [result[0]]: false });
  }
  // in here before the component loads

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    const result = validateB4Submission(userInput);
    if(!result) {
      swal({
        icon: 'error',
        title: 'Inputs must be valid before submission',
      });
    }

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
       

    //  call action 
     this.props.createPost(data);  
  }

  render() {

    const {token, success, history } = this.props;

    console.log(this.props)
    if (success) {
      swal({
        icon: 'success',
        title: 'Signin successful',
      });
      console.log('redirect');
      history.push('/parties');
    }
    const {
      email,
      password,
      isEmailError,
      isPasswordError,
    } = this.state;

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
            { isPasswordError ? (<small className="invalid-feedback-show i-f"> Password not valid </small>)
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

const mapStateToProps = ({posts}) =>({
  success: posts.success,
  token: posts.token
});

SignIn.propTypes = {
  createPost:  PropTypes.func.isRequired,
  success:  PropTypes.bool
} 

export default connect(mapStateToProps,  { createPost  })(withRouter( SignIn));
