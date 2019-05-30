import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createPost } from '../../actions/postActions';
import store from '../../store';
import EntryNavBar from '../reuseable component/entry-navbar-component.jsx';
import validateB4Submission from '../../validation/validateB4Submission';
import { validateInputs } from '../../validation/validateInputs';
import '../../styles/sign-up-form.style.css';


export class SignIn extends Component {
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
    localStorage.clear();
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
    const {
      email,
      password,
      isEmailError,
      isPasswordError,
    } = this.state;

    return (
      <Provider store={store}>
        <React.Fragment>
        <EntryNavBar />
        <form className="entry-form" onSubmit={this.handleSubmit}>
   <header className="entry-header">
      <h1 className="entry-title">Sign in</h1>
   </header>
   <main className="entry-main">
      <div className="entry-group">
         <input className="entry-input" type="text" name="email" onChange={this.onChange}
            value={ email } required />
         <label className="entry-label">Email </label>
         <div className="entry-bar"></div>
      </div>
      <div className="entry-group">
         <input className="entry-input" type="password" name="password" onChange={this.onChange}
            value={ password } required />
         <label className="entry-label">Password</label>
         <div className="entry-bar"></div>
      </div>
      <p className="entry-terms">Don't have an account? <a href={'/sign-up'}>Register</a></p>
   </main>
   <footer className="entry-footer">
     <input className="entry-button" type="submit" name="btn_signin" value="Sign in" />
   </footer>
</form>
        </React.Fragment>
        </Provider>
    );
  }
}

const mapStateToProps = ({posts}) =>({
  success: posts.success,
  // token: posts.token,
  signin: posts.data,
  error: posts.error,
});

SignIn.propTypes = {
  createPost:  PropTypes.func.isRequired,
  success:  PropTypes.bool
} 

export default connect(mapStateToProps,  { createPost  })(withRouter( SignIn));
