import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { getAllParties, getAllOffice } from '../../actions/getActions';
import { UserIndicateInterest } from '../../actions/postActions';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/registerUser.style.css';

export class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      officeName: '',
      partyName: '',
      loading: false,
      data: {
        userId: '',
        officeId: '',
        partyId: '',
      }
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    this.setState({ userName: decoded.userName, data:{ userId: decoded.id } });
    const { getAllParties, getAllOffice } = this.props;
    getAllParties();
    getAllOffice();
  }

  saveOptions = (event) => {
    event.preventDefault();
    const { data } = this.state;
    const userRegistryData = { ...data };
    userRegistryData[event.target.id] = event.target.value;
    const index = event.nativeEvent.target.selectedIndex;
    const whole = event.nativeEvent.target[index].text;
    this.setState({ [event.target.name]: whole, [event.target.id]: [event.target.value][0] });
  }

  // register
  saveInterest = async (e) => {
    e.preventDefault();
    const userInterestData = this.state;
    const saveUserInterest = {
      userId: userInterestData.data.userId,
      userName: userInterestData.userName,
      officeId: userInterestData.officeId,
      officeName: userInterestData.officeName,
      partyId: userInterestData.partyId,
      partyName: userInterestData.partyName,
    }
    this.props.UserIndicateInterest(saveUserInterest);

  };

  render() {
    const style5 = {
      backgroundColor: "#ffffff",
    };

    const focus = {
      backgroundColor: '#ffffff',
    };

    const focusColor = {
      color: '#0b4156',
    };

    const { parties, offices } = this.props;

    const renderPartyOptions = (parties) => {
      return parties.map(party => <option
        key={party.id} name={party.name}
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

    return (
      <React.Fragment>
        <UserNavBar props={this.props} focus={focus} focusColor={focusColor} />
        <main style={style5}>
          <section className="section-card-register">
            <div className="section-card-register-title-box">
              <h1 className="section-card-register-title">
                Indicate Interest
              </h1>
            </div>
            <div className="section-card-register-form" id="section-card-user-register-title-box">
              <form>
                <h1 className="section-card-register-title" id="section-card-register-title-small">Parties</h1>
                <br />
                <select onChange={this.saveOptions} className="section-card-register-form-select" id="partyId" name="partyName">
                  {renderPartyOptions(parties)}
                </select>
                <br />
                <h1 className="section-card-register-title" id="section-card-register-title-small">Offices</h1>
                <br />
                <select onChange={this.saveOptions} className="section-card-register-form-select" id="officeId" name="officeName">
                  {renderOfficeOptions(offices)}
                </select>
                <br />
                <div className="section-card-register-form-select-result" id="result" />
                <br />
                <input className="section-card-register-form-button" id="regBtn" type="submit" value="Submit" onClick={this.saveInterest} />
              </form>
              <div className="section-card-register-form-select-result" id="result" />
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
Interest.propTypes = {
  getAllParties: PropTypes.func.isRequired,
  offices: PropTypes.array.isRequired,
  parties: PropTypes.array.isRequired,
  UserIndicateInterest: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  users: state.get.users,
  parties: state.get.parties,
  offices: state.get.offices,
});

export default connect(mapStateToProps, { getAllParties, getAllOffice, UserIndicateInterest })(Interest);
