import React from 'react';
import jwt_decode from 'jwt-decode';

import logo from '../../styles/images/pogo.png';
import userDefault from '../../styles/images/userimg.png';
import '../../styles/entryNav.style.css';
import '../../styles/userAdminNavbar.style.css';

const EntryNavBar = (userImage) => {
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
        fontSize: '30px',
        cursor: 'pointer',
        height: '30px',
    };

    function openNav(){
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').style.height = '600px';
      }
      function closeNav(){
        document.getElementById('mySidenav').style.width = '0';
      }

      let token = window.localStorage.getItem('token');
      const decoded = jwt_decode(token);
    return (
        <React.Fragment>
        <div className="user-admin-container">
            <nav className="entry-nav">
                <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
                <ul className="entry-nav-list-head">
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/'}>Home</a></li>
                    <li className="entry-nav-list active" ><a className="entry-nav-list-child" href={'/parties'}>Parties</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/candidates'}>Candidates</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/result'}>Results</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/sign-out'}>Sign-out</a></li>
                    <li className="entry-nav-list-username" ><a className="entry-nav-list-child">{decoded.userName}</a></li>
                </ul>
            </nav>
        </div>
        <div className="navbar-mobile">
            <div id="mySidenav" className="sidenav" >
                <a href="#" className="closebtn" onClick={closeNav} ><i className="fa fa-chevron-circle-right" /></a>
                <img style={style1} src={userDefault} />
                <a className="entry-nav-username"><span>{decoded.userName}</span></a>
                <a className="entry-nav-username"><span>{decoded.lastName}</span></a>
                <h1 id="nameside" style={style2}  />
                <a href={'/'}><span>Home</span></a>
                <a href={'/parties'}><i className="far fa-handshake" /><span>Parties</span></a>
                <a href={'/candidates'}><i className="fas fa-users" /><span>Candidates</span></a>
                <a href={'/result'}><i className="fas fa-box-open" /><span>Results</span></a>
                <a href={'/sign-out'}><i className="fas fa-sign-out-alt" /><span>Sign out</span></a>
            </div>
             
            <div className="nav">
                <span className="openbutton" style={style3} onClick={openNav} ><i className="fas fa-align-justify" /></span>
                <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
                <ul id="username" />
                <ul className="entry-nav-list-head">
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/'}>Home</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/sign-in'}>Sign-out</a></li>
                </ul>
          
            </div>
        </div>
        </React.Fragment>
  );
};

export default EntryNavBar;
