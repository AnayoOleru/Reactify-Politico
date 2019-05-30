import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, getAllParties, getAllOffice } from '../../../actions/getActions';
import { RegisterUserAsCandidate } from '../../../actions/postActions';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/register-user-style.css';
import { CreateParty } from '../../../actions/postActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      username: '',
      officeid: '',
      officename: '',
      partyid: '',
      partyname: '',
      loading: false,
      data: {
        userid: '',
        officeid:'',
        partyid: ''
      }
    };
    this.saveOptions = this.saveOptions.bind(this);
    // this.renderOfficeOptions = this.renderOfficeOptions.bind(this);
  }
  componentDidMount() {
    const { getAllUsers, getAllParties, getAllOffice } = this.props;
    getAllUsers();
    getAllParties();
    getAllOffice();
  }

  register = async (e) => {
    e.preventDefault();
    const userRegistryData = this.state;
    const saveUserAsCandidate = {
      userid: userRegistryData.data.userid,
      officeid: userRegistryData.data.officeid,
      partyid: userRegistryData.data.partyid
    }   
    console.log(saveUserAsCandidate);
    
  this.props.RegisterUserAsCandidate(saveUserAsCandidate, saveUserAsCandidate.userid);
    
  };

  saveOptions({ target }) {
    const { data } = this.state;
    const userRegistryData = { ...data };
    userRegistryData[target.id] = target.value;
    this.setState({ data: userRegistryData })

    
  }
  render() {
    const style5 = {
      backgroundColor: "#ffffff",
    };

    const style4 = {
      backgroundColor: '#ffffff',
    };
    const { users, parties, offices } = this.props;

    const renderUserOptions = (users) => {
      return users.map(user => <option key={user.id} name="userid" value={user.id} className="section-card-register-form-select-option">{user.firstname} {user.lastname}</option>);
    }

    const renderPartyOptions = (parties) => {
      return parties.map(party => <option key={party.id} name="partyid" value={party.id} className="section-card-register-form-select-option">{party.name}</option>);
    }

    const renderOfficeOptions = (offices) => {
      return offices.map(office => <option key={office.id} name="officeid" value={office.id} className="section-card-register-form-select-option">{office.name}</option>);
    }

    // const getUser = this.props.get && console.log(this.props.get)

    //   const getParty = this.props.get && console.log('Party>>>>>',this.props)

    //   const getOffice = this.props.get && console.log('Office>>>>>',this.props)
    return (
      <React.Fragment>
        <AdminNavBar />
        <main style={style5}>
          <section className="section-card-register">
            <div className="section-card-register-title-box">
              <h1 className="section-card-register-title">
                Register Users
                        </h1>
            </div>
            <div className="section-card-register-form" id="section-card-user-register-title-box">
              <form>

                <select onChange={this.saveOptions} className="section-card-register-form-select" id="userid">
                  {renderUserOptions(users)}
                </select>

                <select onChange={this.saveOptions} className="section-card-register-form-select" id="partyid">
                  {renderPartyOptions(parties)}
                </select>

                <select onChange={this.saveOptions} className="section-card-register-form-select" id="officeid">
                  {console.log('OFFICEs', offices)}
                  {renderOfficeOptions(offices)}
                </select>
                <br />
                <div className="section-card-register-form-select-result" id="result" />
                <br />
                <input className="section-card-register-form-button" id="regBtn" type="submit" value="Register" onClick={this.register} />
              </form>
              <div className="section-card-register-form-select-result" id="result" />
            </div>
          </section>

        </main>
      </React.Fragment>
    );
  }
}
Register.propTypes = {
  getAllParties: PropTypes.func.isRequired,
  getAllOffice: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  offices: PropTypes.array.isRequired,
  parties: PropTypes.array.isRequired,
  RegisterUserAsCandidate: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  // get: state.get.items.data,
  users: state.get.users,
  parties: state.get.parties,
  offices: state.get.offices,
});

export default connect(mapStateToProps, { getAllParties, getAllOffice, getAllUsers, RegisterUserAsCandidate  })(Register);
