import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCandidates } from '../../actions/getActions';

class Candidates extends Component {
    componentWillMount(){
        const { getAllCandidates } = this.props;
      getAllCandidates();
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
      this.openNav = () => {
        document.getElementById('mySidenav').style.width = '250px';
      };
      this.closeNav = () => {
        document.getElementById('mySidenav').style.width = '0';
      };

      const getCandidates = this.props.get && this.props.get.forEach(candidate => (

        <div key={candidate.id}>
        <h3>{candidate.title}</h3>
        <p>{candidate.body}</p>
        </div>

      ));
    return (
        <React.Fragment>
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav} ><i className="fa fa-chevron-circle-right" /></a>
                <img style={style1} src="../../images/userimg.png" />
                <h1 id="nameside" style={style2} />
                <a href={'/'}><span>Home</span></a>
                <a href={'/parties'}><i className="far fa-handshake" /><span>Parties</span></a>
                <a className="active" href={'/candidates'}><i className="fas fa-users" /><span>Candidates</span></a>
                <a href={'/result'}><i className="fas fa-box-open" /><span>Results</span></a>
                <a href={'/sign-out'}><i className="fas fa-sign-out-alt" /><span>Sign out</span></a>
            </div>
            <div className="nav">
            <span className="openbutton" style={style3} onClick={this.openNav} ><i className="fas fa-align-justify" /></span>
                    <ul id="username" />
            </div>
                                    <main style={style4}>
                                        <section className="section-cards" id="candidatescard">
                                            <div className="text-cards">
                                                <h1 className="heading-primary">
                                                    Candidates
                                                </h1>
                                                {getCandidates}
                                            </div>
                                        </section>

                                    </main>
        </React.Fragment>
    );
  }
}
Candidates.propTypes = {
    getAllCandidates: PropTypes.func.isRequired,
  };


const mapStateToProps = state => ({
    posts: state.payload,
    get: state.get.items.data,
});


export default connect(mapStateToProps, { getAllCandidates } )(Candidates);
