import React from 'react';

import logo from '../../styles/images/pogo.png';
import '../../styles/entry-nav.style.css';
import '../../styles/user-admin-navbar.style.css';

const EntryNavBar = () => {
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
        document.getElementById('mySidenav').style.height = '700px';
      }
      function closeNav(){
        document.getElementById('mySidenav').style.width = '0';
      }
    return (
        <React.Fragment>
        <div className="user-admin-container">
            <nav className="entry-nav">
                <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
                <ul className="entry-nav-list-head">
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/'}>Home</a></li>
                    <li className="entry-nav-list active" ><a className="entry-nav-list-child" href={'/add-party'}>Parties</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/add-office'}>Office</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/register'}>Register</a></li>
                    <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/sign-out'}>Sign-out</a></li>
                </ul>
            </nav>
        </div>
        <div className="navbar-mobile">
            <div id="mySidenav" className="sidenav" >
                <a href="#" className="closebtn" onClick={closeNav} ><i className="fa fa-chevron-circle-right" /></a>
                <img style={style1} src="../../images/userimg.png" />
                <h1 id="nameside" style={style2}  />
                <a href={'/'}><i className="fas fa-home" /><span>Home</span></a>
                <a href={'/all-parties'}><i className="far fa-handshake" /><span>Parties</span></a>
                <a href={'/all-offices'}><i className="fas fa-landmark" /><span>Office</span></a>
                <a href={'/add-party'}><i className="fas fa-plus-circle" /><span>Add Parties</span></a>
                <a href={'/add-office'}><i className="fas fa-plus-circle" /><span>Add Office</span></a>
                <a href={'/register'}><i className="fas fa-user-tie" /><span>Register</span></a>
                <a href={'/sign-out'}><i className="fas fa-sign-out-alt" /><span>Sign out</span></a>
            </div>
             
            <div className="nav">
                <span className="openbutton" style={style3} onClick={openNav} ><i className="fas fa-align-justify" /></span>
                <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
                <ul id="username" />

                {/* <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a> */}
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
