import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

// import { css } from '@emotion/core';
// import { ClipLoader } from 'react-spinners';
import { createPost } from '../../actions/postActions';
import store from '../../store';
import SignUpNavBar from '../reuseable component/signup-navbar-component.jsx';
import validateB4Submission from '../../validation/validateB4Submission';
import { validateInputs } from '../../validation/validateInputs';

// import '../../styles/signup.style.css';


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
  componentDidMount() {
    swal({
      icon: 'success',
      title: 'Welcome back, please sign in',
    });
  }

  // componentWillReceiveProps() {
    
  // }
  
  ShowSpinner = () => {
    return this.setState({ loading: true });
  }
  validate = (e) => {
    const result = validateInputs(e.target.name, e.target.value);
    if (!result[1]) this.setState({ [result[0]]: true });
    if (result[1]) this.setState({ [result[0]]: false });
  }
  // in here before the component loads
  // show spinner

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    const result = validateB4Submission(userInput);
    if(!result) {
      // eslint-disable-next-line no-console
      console.log('Inputs must be valid before submission');
    }
    // here show the spinner(add)
    this.ShowSpinner();
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

    //  call action 
     this.props.createPost(data);  
  }

  render() {

    const {token, success} = this.props;
    if (success) {
      console.log('success');
      swal({
        icon: 'success',
        title: 'Signin successful',
      });
      this.props.history.push('/parties');
    }
    const {
      email,
      password,
      isEmailError,
      isPasswordError,
    } = this.state;
    // setup the loader
//     const override = css`
//     display: block;
//     margin: 0 auto;
//     margin-right:10px;
//     border-color: red;
// `;

// const spinner = (<span className='sweet-loading'>
// <ClipLoader
//   css={override}
//   sizeUnit={'px'}
//   size={10}
//   color={'white'}
//   loading={loading}
// />
// </span>);

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
  success: posts.token,
  token: posts.token
});

SignIn.propTypes = {
  createPost:  PropTypes.func.isRequired,
  success:  PropTypes.bool.isRequired
} 

export default connect(mapStateToProps,  { createPost  })(withRouter( SignIn));
