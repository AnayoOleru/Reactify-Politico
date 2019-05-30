import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import swal from '@sweetalert/with-react';
import { getAllOffice } from '../../../actions/getActions';
import { CreateOffice } from '../../../actions/postActions';
import '../../../styles/govOffice.css';
import '../../../styles/admin-modal.style.css';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
// import store from '../../store';
// import validateOfficeSubmission  from '../../validation/addOffice-validation';

// import '../styles/signup.style.css';


class AddOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      officename: '',
      isTypeError: false,
      isNameError: false,
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    const { getAllOffice } = this.props;
     getAllOffice();
 }

 onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async (e) => {
  e.preventDefault();

  const officeInput = this.state;
  // const result = validatePartySubmission(userInput);
  // if (!result) {
  //   return swal({
  //     icon: 'warning',
  //     title: 'Inputs Must be Valid Before Submission',
  //   });
  // }
  // clear the state
  this.setState({
    type: '',
    officename: '',
    isTypeError: false,
    isNameError: false,
    loading: false,
  });

  const data = {
    type: officeInput.type,
    office: officeInput.office
  };

  // console.log(data, 'data');

  //  call action 
  this.props.CreateOffice(data);
    swal(`You have successfully added....`);
}
render() {
 const style1 = {
   width: '80px',
   paddingLeft: '30px',
 };

 const style2 = {
   paddingLeft: '30px',
   color: '#ffffff',
   fontSize:'20px',
 };

 const style3 = {
   fontSize:'30px',
   cursor:'pointer',
   height: '30px',
 };


 this.openNav = () => {
   document.getElementById('mySidenav').style.width = '250px';
 };
 this.closeNav = () => {
   document.getElementById('mySidenav').style.width = '0';
 };
 this.modal = () => {
  swal(
    <div>
      <h2 className="party-add-party">Add Political office</h2>
      <input placeholder="type of office" className="entry-input" type="text" name="type" value={type}  onChange={this.onChange}
         required />
      <br />
      <br />
      <input placeholder="name of office" className="entry-input" type="text" name="officename" value={officename} onChange={this.onChange}
            required />
                <br />
                <p className="party-error-message">ERROR</p>
                <br />
             <input className="entry-input-btn" type="submit" name="name" value="Add" onClick={this.handleSubmit}
            required />
    </div>
  )
 };
   const getOffice = this.props.get && this.props.get.map(office => (
//      <div key={office.id} className="box box2">
//      <p className="type">{office.type}</p>
//      <p className="people">{office.name}</p>
// </div>

<div key={office.id} className="card">
<div className="card-content">
{office.type}
</div>
     <div className="card-content-order">
     {office.name}
</div>
</div>
   ));
   

   const {
    type,
    officename,
    isTypeError,
    isNameError,
  } = this.state;

 return (
     <React.Fragment>
       <AdminNavBar />
         <h1 className="title">Add Office</h1>
         {/* <div className="container" id="officeResult">{getOffice}</div> */}
         <div className="card-container">{getOffice}</div>
         <button href={'/add-office'} className="add" >+</button>
     </React.Fragment>
 );
}
}
AddOffice.propTypes = {
getAllOffice: PropTypes.func.isRequired,
CreateOffice: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
 posts: state.payload,
 get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllOffice, CreateOffice })(AddOffice);

