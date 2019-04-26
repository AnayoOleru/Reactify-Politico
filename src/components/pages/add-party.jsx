import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { css } from '@emotion/core';
// import { ClipLoader } from 'react-spinners';
import { CreateParty } from '../../actions/postActions';
import store from '../../store';
import validatePartySubmission  from '../../validation/addParty-validation';

import '../styles/signup.style.css';


class AddParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      headquarters: '',
      logo: '',
      isNameError: false,
      isHeadquaterError: false,
      isLogoError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  // componentDidMount() {

  // }

  // componentWillReceiveProps() {
    
  // }
  
  ShowSpinner = () => {
    return this.setState({ loading: true });
  }
  // in here before the component loads
  // show spinner

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = this.state;
    const result = validatePartySubmission(userInput);
    if(!result) {
      // eslint-disable-next-line no-console
      console.log('Inputs must be valid before submission');
    }
    // here show the spinner(add)
    this.ShowSpinner();
    // clear the state
    this.setState({
        name: '',
        headquarters: '',
        logo: '',
        isNameError: false,
        isHeadquaterError: false,
        isLogoError: false,
        loading: false,
    });

      const data = {
      name: userInput.name,
      headquarters: userInput.headquarters,
      logo: userInput.logo
      };
       
      // console.log(data, 'data');

    //  call action 
     this.props.createPost(data);  
  }

  render() {
    const {
      name,
      headquarters,
      logo,
      isNameError,
      isHeadquaterError,
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
             {/* render components here, pass onsubmit, onchange, name, and value{pass the state} to the inputs */}
        </React.Fragment>
        </Provider>
    );
  }
}

AddParty.propTypes = {
  CreateParty:  PropTypes.func.isRequired
} 

export default connect(null,  { CreateParty })(AddParty );
