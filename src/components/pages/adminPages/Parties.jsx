import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllParties } from '../../../actions/getActions';
import AdminNavBar from '../../reuseable component/admin-navbar.component.jsx';
import '../../../styles/parties.style.css';

class Parties extends Component {
    componentDidMount(){
        const { getAllParties } = this.props;
       getAllParties();
    }
  render() {
      const style5 = {
        fontSize: '30px'
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
          <AdminNavBar />
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
  };


const mapStateToProps = state => ({
    posts: state.payload,
    get: state.get.items.data,
});

export default connect(mapStateToProps, { getAllParties })(Parties);
