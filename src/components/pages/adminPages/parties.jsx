import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { getAllParties } from '../../../actions/getActions';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/parties.style.css';

export class Parties extends Component {
  componentDidMount() {
    const { getAllParties } = this.props;
    getAllParties();
  }

  handleDeleteParty() {
    swal({
      title: "Are you sure?",
      icon: "warning",
      button: true,
      dangerMode: true,
      text: "cancel",
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
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

    const getParties = this.props.get && this.props.get.map(party => (
      <div className="col-1-of-3" key={party.id}>
        <div className="card">
          <div className="card__side card__side--front">
            <img className="card__picture card__picture--3" src={party.logourl} />
            <div className="card__details">
              <ul>
                <li style={style5}>{party.name}</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Headquater Address</p>
                <p className="card__price-only">{party.hqaddress}</p>

              </div>
              <Link to={`/parties/${party.id}/name`}>
                <a href="#" className="btn" id="edit">Edit</a>
              </Link>
              <Link to={`/parties/${party.id}/delete`}>
                <a href="#" className="btn" id="delete">Delete</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <React.Fragment>
        <AdminNavBar props={this.props} focus={focus} focusColor={focusColor}  />
        <main style={style4}>
          <section className="section-cards">
            <div className="text-cards">
              <h1 className="heading-primary">
                Parties
                </h1>
              <div className="row" id="partyResult">{getParties}</div>
            </div>
            <div className="row" id="partyResult" />
            <Link to={'/add-party'}><button href={'/add-party'} className="add" >+</button></Link>

          </section>
        </main>
      </React.Fragment>
    );
  }
}
Parties.propTypes = {
  getAllParties: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllParties })(Parties);
