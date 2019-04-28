import React, { Component } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { css } from '@emotion/core';
// import { ClipLoader } from 'react-spinners';
import { CreateOffice } from '../../actions/postActions';
import store from '../../store';
import validateOfficeSubmission  from '../../validation/addOffice-validation';

// import '../styles/signup.style.css';


class AddOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      isNameError: false,
      isTypeError: false,
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
    const result = validateOfficeSubmission(userInput);
    if(!result) {
      // eslint-disable-next-line no-console
      console.log('Inputs must be valid before submission');
    }
    // here show the spinner(add)
    this.ShowSpinner();
    // clear the state
    this.setState({
      name: '',
      type: '',
      isNameError: false,
      isTypeError: false,
      loading: false,
    });

      const data = {
      name: userInput.name,
      type: userInput.type,
      };
       
      // console.log(data, 'data');

    //  call action 
     this.props.CreateOffice(data);  
  }

  render() {
    const {
      name,
      type,
      isNameError,
      isTypeError,
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

AddOffice.propTypes = {
  CreateOffice:  PropTypes.func.isRequired
} 

export default connect(null,  { CreateOffice })(AddOffice);
