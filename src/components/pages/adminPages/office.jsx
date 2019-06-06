import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOffice } from '../../../actions/getActions';
import '../../../styles/govOffice.style.css';
import '../../../styles/adminModal.style.css';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import { Link } from 'react-router-dom';


export class Office extends Component {
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
  componentDidMount() {
    const { getAllOffice } = this.props;
    getAllOffice();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {

    const style4 = {
      backgroundColor: '#ffffff',
    };

    const focus = {
      backgroundColor: '#ffffff',
    };

    const focusColor = {
      color: '#0b4156',
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
        <AdminNavBar props={this.props} focus={focus} focusColor={focusColor}  />
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
Office.propTypes = {
  getAllOffice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllOffice })(Office);

