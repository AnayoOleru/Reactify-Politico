import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOffice } from '../../../actions/getActions';
import { CreateOffice } from '../../../actions/postActions';
import '../../../styles/govOffice.css';
import '../../../styles/admin-modal.style.css';
import AdminNavBar from '../../reuseable component/admin-navbar.component';
import { Link } from 'react-router-dom';


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

  //  call action 
  this.props.CreateOffice(data);
    swal(`You have successfully added....`);
}
render() {

 const style4 = {
  backgroundColor:'#ffffff',
};


   const getOffice = this.props.get && this.props.get.map(office => (
    <div className="gov-office-box" key={office.id} ><h3 className="gov-office-box-name">{office.type}
    </h3><h1 className="gov-office-box-name">{office.name}
    </h1></div>
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
       <main style={style4}>
                                        <section className="section-cards" id="candidatescard">
                                            <div className="text-cards">
                                                <h1 className="heading-primary">
                                                    Offices
                                                </h1>
                                                <p className="gov-office-details">Add a new political office</p>
                                            </div>
                                            <div>
                                              {getOffice}
                                            </div>
                                        </section>

                                    </main>
         <Link to={'/add-office'}><button className="add" >+</button></Link>
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

