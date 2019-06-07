import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllElectionResults } from '../../actions/getActions';
import '../../styles/result.style.css';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';

export class Results extends Component {
  componentDidMount() {
    const officeId = this.props.match.params.officeid;
    const { getAllElectionResults } = this.props;
    getAllElectionResults(officeId);

  }

  render() {
    const style3 = {
      fontSize: '30px',
      cursor: 'pointer',
      height: '30px',
    };
    const style4 = {
      fontWeight: 'bold',
      fontSize: '30px',
    };

    const focus = {
      backgroundColor: '#ffffff',
    };

    const focusColor = {
      color: '#0b4156',
    };

    const { candidates } = this.props;

    const renderResults = (candidates) => {
      return candidates.map((candidate) => {
        
        return (
          <tr key={candidate.candidate}>
            <td data-th="Candidate:">{candidate.candidate}</td>
            <td data-th="Party:">{candidate.office}</td>
            <td data-th="Result:">{candidate.result}</td>
          </tr>
        );
      });
    }
    // console.log(getElection);

    return (
      <React.Fragment>
        <UserNavBar props={this.props} focus={focus} focusColor={focusColor} />
        <div className="nav2">
          <span style={style3} className="openbutton2" onClick={this.openNav2}><i className="fas fa-align-justify" /></span>
        </div>

        <table id="t01">
          <caption className="header" id="officename" />
          <thead>
            <tr id="header">
               <th style={style4}>Party</th>
              <th style={style4}>Candidate</th>
              <th style={style4}>Votes</th>
            </tr>
          </thead>
          <tbody id="tableRow">
          {renderResults(candidates)}
          </tbody>
        </table>

      </React.Fragment>
    );
  }
}
Results.propTypes = {
  getAllElectionResults: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: state.payload,
  candidates: state.get.candidates,
});


export default connect(mapStateToProps, { getAllElectionResults })(Results);
