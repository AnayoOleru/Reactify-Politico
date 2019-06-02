import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, getAllParties, getAllOffice, getAUser } from '../../../actions/getActions';
import { RegisterUserAsCandidate } from '../../../actions/postActions';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/register-user-style.css';
import { CreateParty } from '../../../actions/postActions';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      officeid: '',
      partyid: '',
      loading: false,
      data: {
        userid: '',
        officeid: '',
        partyid: '',
      }
    }
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
    console.log(userRegistryData.officeid);
    const saveUserAsCandidate = {
      candidate: userRegistryData.data.userid,
      candidateName: userRegistryData.userid,
      office: userRegistryData.data.officeid,
      officeName:userRegistryData.officeid,
      party: userRegistryData.data.partyid,
      partyName:userRegistryData.partyid,
    }
    console.log(saveUserAsCandidate);
    

    // console.log(userRegistryData.data.userid, '>>>>>>>>>');

    this.props.RegisterUserAsCandidate(saveUserAsCandidate, userRegistryData.data.userid);

  };

  saveOptions = (event) => {
    event.preventDefault();
    const { data } = this.state;
    const userRegistryData = { ...data };
    userRegistryData[event.target.id] = event.target.value;
    const index = event.nativeEvent.target.selectedIndex;
    const whole= event.nativeEvent.target[index].text;
    this.setState({ data: userRegistryData })
    this.setState({[event.target.id]: whole});
    console.log(this.state);
    
  }
  // saveOptionsUsers = ({ target }) => {
  //   const { data } = this.state;
  //   const { getAllUsers } = this.props;
  //   console.log(getAllUsers);
  //   const userRegistryData = { ...data };
  //   userRegistryData[target.id] = target.value;
  //   getAllUsers(target.value);
  //   this.setState({ data: userRegistryData })
  // }
  render() {
    const style5 = {
      backgroundColor: "#ffffff",
    };

    const style4 = {
      backgroundColor: '#ffffff',
    };
    const { users, parties, offices } = this.props;

    const renderUserOptions = (users) => {
      console.log(users, "$$$$$$$$$$$$")
      return users.map(user => <option 
        key={user.id} 
        name={user.firstname} 
        label={user.firstname} 
        value={user.id} 
        className="section-card-register-form-select-option">{user.firstname} {user.lastname}</option>);
    }

    const renderPartyOptions = (parties) => {
      return parties.map(party => <option 
        key={party.id} name="partyid" 
        value={party.id} 
        className="section-card-register-form-select-option">{party.name}</option>);
    }

    const renderOfficeOptions = (offices) => {
      return offices.map(office => <option 
        key={office.id} 
        name={office.name} 
        value={office.id} 
        className="section-card-register-form-select-option">{office.name}</option>);
    }

    // const getUser = this.props.get && console.log(this.props.get)

    //   const getParty = this.props.get && console.log('Party>>>>>',this.props)

    //   const getOffice = this.props.get && console.log('Office>>>>>',this.props)
    return (
      <React.Fragment>
        <AdminNavBar
          userImage={this.imageUrl} />
        <main style={style5}>
          <section className="section-card-register">
            <div className="section-card-register-title-box">
              <h1 className="section-card-register-title">
                Register candidate
                        </h1>
            </div>
            <div className="section-card-register-form" id="section-card-user-register-title-box">
              <form>
                <h1 className="section-card-register-title" id="section-card-register-title-small">Users</h1>
                <br />
                <select onChange={this.saveOptions} className="section-card-register-form-select" id="userid" >
                  {renderUserOptions(users)}
                </select>
                <br />
                <h1 className="section-card-register-title" id="section-card-register-title-small">Parties</h1>
                <br />
                <select onChange={this.saveOptions} className="section-card-register-form-select" id="partyid">
                  {renderPartyOptions(parties)}
                </select>
                <br />
                <h1 className="section-card-register-title" id="section-card-register-title-small">Offices</h1>
                <br />
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
  getAUser: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { getAllParties, getAllOffice, getAllUsers, RegisterUserAsCandidate, getAUser })(Register);
