import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllParties } from '../../actions/getActions';
import '../../styles/parties.style.css';

class Parties extends Component {
    componentDidMount(){
        const { getAllParties } = this.props;
       getAllParties();
    }
  render() {
      const style5 = {
        fontSize: '30px'
      };
      const style1 = {
        width: '80px',
        paddingLeft: '30px',
      };
      const style2 = {
        paddingLeft: '30px', 
        color: '#ffffff',
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
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav} ><i className="fa fa-chevron-circle-right" /></a>
                <img style={style1} src="../../images/userimg.png" />
                <h1 id="nameside" style={style2} />
                <a href={'/'}><span>Home</span></a>
                <a className="active" href={'/parties'}><i className="far fa-handshake" /><span>Parties</span></a>
                <a href={'/candidates'}><i className="fas fa-users" /><span>Candidates</span></a>
                <a href={'/results'}><i className="fas fa-box-open" /><span>Results</span></a>
                <a href={'/sign-out'}><i className="fas fa-sign-out-alt" /><span>Sign out</span></a>
            </div>
            <div className="nav">
            <span className="openbutton" style={style3} onClick={this.openNav} ><i className="fas fa-align-justify" /></span>
                    <ul id="username" />
            </div>
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
