import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOffice } from '../../actions/getActions';
import { Link } from 'react-router-dom';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/candidates.style.css';
// import userVote from './user-vote';
export class Alloffice extends Component {
  componentDidMount() {
    const { getAllOffice } = this.props;
    getAllOffice();
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
        <div className="gov-office-box" key={office.id} >
          <h3 className="gov-office-box-name">{office.type}</h3>
          <h1 className="gov-office-box-name">{office.name}</h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Link to={`/office/${office.id}/result`}><button className="gov-office-box-name-button" >View result</button></Link>
          </div>
          </div>
    ));
    return (
      <React.Fragment >
        <UserNavBar props={this.props} focus={focus} focusColor={focusColor} />
        <main style={style4}>
          <section className="section-cards" id="candidatescard">
            <div className="text-cards">
              <h1 className="heading-primary">
                Offices
                                                </h1>
              <p className="gov-office-details">Click to view election result</p>
            </div>
            <div>
              {getOffice}
            </div>
          </section>

        </main>
      </React.Fragment>
    );
  }
}
Alloffice.propTypes = {
  getAllOffice: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  get: state.get.items.data,
});


export default connect(mapStateToProps, { getAllOffice })(Alloffice);
