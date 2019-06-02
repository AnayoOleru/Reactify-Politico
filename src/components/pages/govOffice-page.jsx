import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { getAllOffice } from '../../actions/getActions';
import { Link } from 'react-router-dom';
import { UserVote } from '../../actions/postActions';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/candidates-style.css';
// import userVote from './user-vote';
export class Alloffice extends Component {
    componentDidMount(){
        const { getAllOffice } = this.props;
      getAllOffice();
    }
  render() {
      const style1 = {
        width: '80px',
        paddingLeft: '30px',
      };
      const style2 = {
        paddingLeft: '30px',
        color: '#ffffff'
      };
      const style3 = {
        fontSize:'30px',
        cursor:'pointer',
        height: '30px',
      };
      const style4 = {
        backgroundColor:'#ffffff',
      };
      const style5 = {
        fontSize: '19px',
      };
      const style6 = {
        fontSize: '20px',
      };

      const getOffice = this.props.get && this.props.get.map(office => (
        <Link to={`/office/${office.id}/result`} style={{ textDecoration: 'none' }}><div className="gov-office-box" key={office.id} ><h3 className="gov-office-box-name">{office.type}
        </h3><h1 className="gov-office-box-name">{office.name}
        </h1></div></Link>
      ));
    return (
        <React.Fragment>
          <UserNavBar />
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


export default connect(mapStateToProps, { getAllOffice } )(Alloffice);
