import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllParties } from '../../actions/getActions';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/parties.style.css';

export class Parties extends Component {
  componentDidMount() {
    const { getAllParties } = this.props;
    getAllParties();
  }
  render() {
    const style5 = {
      fontSize: '30px'
    };

    const style4 = {
      backgroundColor: '#ffffff',
    };
    const focus = {
      backgroundColor: '#ffffff',
    };

    const focusColor = {
      color: '#0b4156',
    };
    
    const getItems = this.props.get && this.props.get.map(party => (
      <div key={party.id} className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <img className="card__picture card__picture--1" id="partyImage" src={party.logourl} />
            <div className="card__details">
              <ul>
                <li style={style5} id="partyName">{party.name}</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Headquater Address</p>
                <p className="card__price-only">{party.hqaddress}</p>

              </div>
            </div>
          </div>
        </div>
      </div>

    ));
    return (
      <React.Fragment>
        <UserNavBar props={this.props} focus={focus} focusColor={focusColor} />
        <main style={style4}>
          <section className="section-cards">
            <div className="text-cards">
              <h1 className="heading-primary">
                Parties
                </h1>
              <div className="row" id="partyResult">{getItems}</div>
            </div>
            <div className="row" id="partyResult" />

          </section>
        </main>
      </React.Fragment>
    );
  }
}
Parties.propTypes = {
  getAllParties: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
  loading: state.type,
});

export default connect(mapStateToProps, { getAllParties })(Parties);
