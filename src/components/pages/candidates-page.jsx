import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { getAllCandidates } from '../../actions/getActions';
import { UserVote } from '../../actions/postActions';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';
import '../../styles/candidates-style.css';
// import userVote from './user-vote';
export class Candidates extends Component {
  componentDidMount() {
    const { getAllCandidates } = this.props;
    getAllCandidates();
  }

  handleUSerVote(office, officeName, candidateId, candidateName) {
    const { UserVote } = this.props;
    let token = window.localStorage.getItem('token');
    const decoded = jwt_decode(token);

    const data = {
      created_by: decoded.id,
      userName: decoded.lastName,
      office: office,
      officeName: officeName,
      candidate: candidateId,
      candidateName: candidateName,
    };

    UserVote(data);
  }
  render() {
    const style4 = {
      backgroundColor: '#ffffff',
    };
    const style5 = {
      fontSize: '19px',
    };
    const style6 = {
      fontSize: '20px',
    };

    const GetCandidates = () => {
      return (
        this.props.getCandidates && this.props.getCandidates.map(candidate => (
          <div className="row" key={candidate.candidateid}>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading" />
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
                    <a href="#" className="btn" onClick={() => this.handleUSerVote(candidate.office, candidate.officename, candidate.candidateid, candidate.candidatename)}>Vote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )));
    };
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
            <GetCandidates />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

Candidates.propTypes = {
  getAllCandidates: PropTypes.func.isRequired,
  UserVote: PropTypes.func.isRequired,
  getCandidates: PropTypes.array
};

const mapStateToProps = ({ posts, get }) => ({
  posts: posts,
  getCandidates: get.candidates,
});


export default connect(mapStateToProps, { getAllCandidates, UserVote })(Candidates);
