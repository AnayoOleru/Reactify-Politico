import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, getAllParties, getAllOffice, } from '../../../actions/getActions';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/register-user-style.css';
import { CreateParty } from '../../../actions/postActions';

class Register extends Component {
  componentDidMount() {
    const { getAllUsers, getAllParties, getAllOffice } = this.props;
    getAllUsers();
    getAllParties();
    getAllOffice();
  }

  register = async (e) => {
    e.preventDefault();
    console.log('everyone is here');
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
      return users.map(user => <option>{user.firstname} {user.lastname}</option>);
    }

    const renderPartyOptions = (parties) => {
      return parties.map(party => <option>{party.name}</option>);
    }

    const renderOfficeOptions = (offices) => {
      return offices.map(office => <option>{office.name}</option>);
    }

    const getUser = this.props.get && console.log(this.props.get)

    //   const getParty = this.props.get && console.log('Party>>>>>',this.props)

    //   const getOffice = this.props.get && console.log('Office>>>>>',this.props)
    return (
      <React.Fragment>
        <AdminNavBar />
        <main style={style5}>
          <section className="section-cards">
            <div className="text-cards">
              <h1 className="heading-primary">
                Register Users
                        </h1>
            </div>
            <div className="register" id="userRegister">
              <form>

                <select id="users">
                  {renderUserOptions(users)}
                </select>

                <select id="parties">
                {renderPartyOptions(parties)}
                </select>

                <select id="offices">
                {renderOfficeOptions(offices)}
                </select>
                <br />
                <div id="result" />
                <br />
                <input id="regBtn" type="submit" value="Register" onClick={this.register} />
              </form>
              <div id="result" />
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
};


const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
  users: state.get.users,
  parties: state.get.parties,
  offices: state.get.offices,
});

export default connect(mapStateToProps, { getAllParties, getAllOffice, getAllUsers })(Register);
