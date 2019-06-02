// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getAllOffice } from '../../actions/getActions';
// import UserNavbar from '../reuseable component/user-navbar.component';
// // import '../../styles/govOffice.css';

// export class AllOffice extends Component {

//     componentDidMount(){
//        const { getAllOffice } = this.props;
//         getAllOffice();
//     }
//   render() {
//       const getOffice = this.props.get && this.props.get.map(office => (
//         <div key={office.id} className="box box2">
//         <p className="type">{office.type}</p>
//         <p className="people">{office.name}</p>
// </div>
//       ));

//     return (
//         <React.Fragment>
//           <UserNavbar />
//           <br />
//           <br />
//   <div className="col-sm-6">
// <h1 className="heading-primary">Offices</h1>
// <div>
//   <div></div>
// </div>
//   </div>
//         </React.Fragment>
//     );
//   }
// }
// AllOffice.propTypes = {
//   getAllOffice: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//     posts: state.payload,
//     get: state.get.items.data,
// });

// export default connect(mapStateToProps, { getAllOffice })(AllOffice);

