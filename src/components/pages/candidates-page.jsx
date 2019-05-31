import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { getAllCandidates } from '../../actions/getActions';
import { UserVote } from '../../actions/postActions';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/candidates-style.css';
// import userVote from './user-vote';
class Candidates extends Component {
    componentDidMount(){
        const { getAllCandidates } = this.props;
      getAllCandidates();
    }

    handleUSerVote (officeId, officeName, candidateName, candidateId){
      const { UserVote } = this.props;
      // console.log(candidateId);
      // console.log(officeId);
      // console.log(officeName);
      // console.log(candidateName);
      let token = window.localStorage.getItem('token');
      const decoded = jwt_decode(token);
      
      const data = {
        created_by: decoded.id,
        username: decoded.lastName,
        office: officeId,
        officename: officeName,
        candidate: candidateId,
        candidatename: candidateName,
        };

      UserVote(data);     
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
      this.openNav = () => {
        document.getElementById('mySidenav').style.width = '250px';
      };
      this.closeNav = () => {
        document.getElementById('mySidenav').style.width = '0';
      };

      // eslint-disable-next-line react/prop-types
      const getCandidates = () => { return this.props.get && this.props.get.length !== 0 && this.props.get.map(candidate => (
        <div className="row" key={candidate.candidateid}>
        <div className="col-1-of-3">
                    <div className="card">
            <div className="card__side card__side--front">
             <div className="card__picture card__picture--1">&nbsp;</div>
            <h4 className="card__heading">
        {/* <span className="card__heading-span card__heading-span--1" >{candidate.officename}</span> */}
        </h4>
        <div className="card__details">
           <ul>
        <li style={style5}>{candidate.candidatename}</li>
        <li style={style6} >{candidate.officename}</li>
        </ul>
        </div>
         </div>
        <div className="card__side card__side--back card__side--back-1">
         <div className="card__cta">
         <div className="card__price-box">
        <p className="card__price-only">{candidate.partyname}</p>
        <p className="card__price-value">{candidate.candidatename}</p>
          </div>
        <a href="#" className="btn" onClick={() => this.handleUSerVote(candidate.office, candidate.officename, candidate.party, candidate.partyname, candidate.candidatename, candidate.candidate)}>Vote</a>
            </div>
                </div>
                    </div>
                    </div>
                    </div>

      ));};
    return (
        <React.Fragment>
          <UserNavBar />
                                    <main style={style4}>
                                        <section className="section-cards" id="candidatescard">
                                            <div className="text-cards">
                                                <h1 className="heading-primary">
                                                    Candidates
                                                </h1>
                                            </div>
                                            {getCandidates()}
                                        </section>

                                    </main>
        </React.Fragment>
    );
  }
}
Candidates.propTypes = {
    getAllCandidates: PropTypes.func.isRequired,
    UserVote: PropTypes.func.isRequired,
  };


const mapStateToProps = state => ({
    posts: state.payload,
    get: state.get.items.data,
});


export default connect(mapStateToProps, { getAllCandidates, UserVote } )(Candidates);
