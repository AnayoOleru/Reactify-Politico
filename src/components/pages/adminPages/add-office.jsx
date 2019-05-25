import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOffice } from '../../../actions/getActions';
import '../../../styles/govOffice.css';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
// import store from '../../store';
// import validateOfficeSubmission  from '../../validation/addOffice-validation';

// import '../styles/signup.style.css';


class AddOffice extends Component {
  componentDidMount(){
    const { getAllOffice } = this.props;
     getAllOffice();
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
   const getOffice = this.props.get && this.props.get.map(office => (
     <div key={office.id} className="box box2">
     <p className="type">{office.type}</p>
     <p className="people">{office.name}</p>
</div>
   ));

 return (
     <React.Fragment>
       <AdminNavBar />
         <h1 className="title">Add Office</h1>
         <div className="container" id="officeResult">{getOffice}</div>



         <div className="modal" id="openmodal">
             <form id="addOffice">
                 <h1>Add Political office</h1>
                 <input type="text" placeholder="type e.g State" id="type" />
                 <input type="text" placeholder="name e.g Minister" id="name" required />
                 <br />
                 <div id="result" />
                 <input type="submit" value="Cancel" />
                 <input type="submit" />
             </form>
         </div>


         <button className="add" >+</button>
     </React.Fragment>
 );
}
}
AddOffice.propTypes = {
getAllOffice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
 posts: state.payload,
 get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllOffice })(AddOffice);

