import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EntryNavBar from '../reuseable component/entry-navbar-component.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SignupAction } from '../../actions/postActions';
import '../../styles/signupForm.style.css';

export class SignUp extends Component {
   constructor(props) {
      super(props);
      this.state = {
         passportUrl: 'https://res.cloudinary.com/dbyvxd3za/image/upload/v1558793768/avatar_whxnhd.png',
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

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps !== prevState) {
        return ({ loading: nextProps.loading }) // <- this is setState equivalent
      }
   }   

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      const userInput = this.state;

      const data = {
         passportUrl: userInput.passportUrl,
         firstname: userInput.firstname,
         lastname: userInput.lastname,
         othername: userInput.othername,
         email: userInput.email,
         phonenumber: userInput.phonenumber,
         password: userInput.password,
      };

      // Call Action
      this.props.SignupAction(data);
   }
   render() {
      const { posts } = this.props;
      const { loading } = posts;

      console.log(this.props, loading, '<<<<>>>>>');
      
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
         <React.Fragment>
            <EntryNavBar />
            <form className="entry-form" onSubmit={this.handleSubmit}>
               <header className="entry-header">
                  <h1 className="entry-title">Sign up</h1>
               </header>
               <main className="entry-main">
                  <div className="entry-group">
                     <input className="entry-input" type="text" name="firstname" onChange={this.onChange}
                        value={firstname} required />
                     <label className="entry-label">Firstname </label>
                     <div className="entry-bar" />
                  </div>
                  <div className="entry-group">
                     <input className="entry-input" type="text" name="lastname" onChange={this.onChange}
                        value={lastname} required />
                     <label className="entry-label">LastName </label>
                     <div className="entry-bar"></div>
                  </div>
                  <div className="entry-group">
                     <input className="entry-input" type="text" name="othername" onChange={this.onChange}
                        value={othername} required />
                     <label className="entry-label">Middlename </label>
                     <div className="entry-bar"></div>
                  </div>
                  <div className="entry-group">
                     <input className="entry-input" type="text" name="email" onChange={this.onChange}
                        value={email} required />
                     <label className="entry-label">Email </label>
                     <div className="entry-bar"></div>
                  </div>
                  <div className="entry-group">
                     <input className="entry-input" type="text" name="phonenumber" onChange={this.onChange}
                        value={phonenumber} required />
                     <label className="entry-label">Phone-number </label>
                     <div className="entry-bar"></div>
                  </div>
                  <div className="entry-group">
                     <input className="entry-input" type="password" name="password" onChange={this.onChange}
                        value={password} required />
                     <label className="entry-label">Password</label>
                     <div className="entry-bar"></div>
                  </div>
                  <p className="entry-terms">By clicking sign up, I confirm that I have read and agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
               </main>
               <div>
               {loading ? <h2 style={{textAlign: "center"}} className="entry-terms">Loading...</h2> : null}
            </div>
               <footer className="entry-footer">
                  <input className="entry-button" type="submit" name="btn_signin" value="Sign up" />
               </footer>
            </form>
         </React.Fragment>
      );
   }
}

const mapStateToProps = ({ posts }) => ({ posts});

SignUp.propTypes = {
   SignupAction: PropTypes.func.isRequired,
   success: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { SignupAction })(withRouter(SignUp));
