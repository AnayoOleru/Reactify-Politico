import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllElectionResults } from '../../actions/getActions';
import '../../styles/result-style.css';
import UserNavBar from '../reuseable component/user-navbar.component.jsx';

export class Results extends Component {
    componentDidMount(){
      const { getAllElectionResults } = this.props;
      getAllElectionResults();
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
        fontWeight:'bold',
        fontSize: '30px',
      };

      this.openNav = () => {
        document.getElementById('mySidenav').style.width = '250px';
      };
      this.closeNav = () => {
        document.getElementById('mySidenav').style.width = '0';
      };

    //   const getElection = this.props.get && this.props.get.forEach(candidate => (

    //     <div key={candidate.id}>
    //     <h3>{candidate.title}</h3>
    //     <p>{candidate.body}</p>
    //     </div>

    //   ));
    return (
        <React.Fragment>
          <UserNavBar />
            <div id="mySidenav2" className="sidenav2">
              <a href="#" className="closebtn2" onClick={this.closeNav2}><i className="fa fa-chevron-circle-right" /></a>
              <h2 style={style2}>Offices</h2>
              
          </div>
          <div className="nav2">
          <span style={style3} className="openbutton2" onClick={this.openNav2}><i className="fas fa-align-justify" /></span>
          </div>

        <table id="t01">
                        <caption className="header" id="officename" />
                        <thead>
                          <tr id="header">
                            <th style={style4}>Office</th>

                            <th style={style4}>Candidate</th>
                            <th style={style4}>Result</th>
                          </tr>
                        </thead>
                        <tbody id="tableRow" />
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
    get: state.get.items.data,
});


export default connect(mapStateToProps, { getAllElectionResults } )(Results);
