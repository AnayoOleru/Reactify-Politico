import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllParties } from '../../../actions/getActions';
import UserNavBar from '../../reuseable component/user-navbar.component.jsx';
import '../../../styles/parties.style.css';

class Register extends Component {
    componentDidMount(){
        const { getAllParties } = this.props;
       getAllParties();
    }
  render() {
      const style5 = {
        backgroundColor:"#ffffff",
      };

      const style4 = {
        backgroundColor:'#ffffff',
      };
      const getItems = this.props.get && this.props.get.map(party => (
        <div key={party.id} className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1" id="partyImage">&nbsp;</div>
                        <div className="card__details">
                            <ul>
                                <li style={style5} id="partyName">{party.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

      ));
    return (
        <React.Fragment>
          <UserNavBar />
          <main style={style5}>
                <section className="section-cards">
                    <div className="text-cards">
                        <h1 className="heading-primary">
                            Register Users
                        </h1>
                    </div>
                    <div className="register" id="userRegister">
                        <form>
                            
                            <select id="users" />
                            
                            <select id="parties" />

                            <select id="offices" />
                            <br />
                            <div id="result" />
                            <br />
                            <input id="regBtn" type="submit" value="Register" />
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
  };


const mapStateToProps = state => ({
    posts: state.payload,
    get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllParties })(Register);
