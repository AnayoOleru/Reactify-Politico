import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllInterestedUsers } from '../../../actions/getActions';
import { RegisterUserAsCandidate } from '../../../actions/postActions';
import { Link } from 'react-router-dom';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/registerUser.style.css';
import '../../../styles/candidates.style.css';
// import userVote from './user-vote';
export class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getAllInterestedUsers } = this.props;
    getAllInterestedUsers();
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

    this.register = (userid, username, officeid, officename, partyid, partyname) => {
      // e.preventDefault();
      const saveUserInterest = {
      candidate: userid,
      candidateName: username,
      office: officeid,
      officeName: officename,
      party: partyid,
      partyName: partyname,
    };
    this.props.RegisterUserAsCandidate(saveUserInterest, userid);
    };

    const usersInterest = this.props.get && this.props.get.map(interest => (
      <div className="gov-office-box-register" key={interest.interestid} >
        <h3 className="gov-office-box-name" style={{fontWeight:'lighter'}}>{interest.username}</h3>
        <h3 className="gov-office-box-name">{interest.officename}</h3>
        <h3 className="gov-office-box-name">{interest.partyname}</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Link><button className="gov-office-box-name-button" onClick={() => this.register(interest.userid, interest.username, interest.officeid, interest.officename, interest.partyid, interest.partyname)}  >Register this user</button></Link>
        </div>
      </div>
    ));
    return (
      <React.Fragment >
        <AdminNavBar props={this.props} focus={focus} focusColor={focusColor} />
        <main style={style4}>
          <section className="section-cards" id="candidatescard">
            <div className="text-cards">
              <h1 className="heading-primary">
                Users
                                                </h1>
              <p className="gov-office-details">List of users who indicate interest</p>
            </div>
            <div>
              {usersInterest}
            </div>
          </section>

        </main>
      </React.Fragment>
    );
  }
}
AllUsers.propTypes = {
  getAllInterestedUsers: PropTypes.func.isRequired,
  RegisterUserAsCandidate: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.interest.data,
});


export default connect(mapStateToProps, { getAllInterestedUsers, RegisterUserAsCandidate })(AllUsers);
