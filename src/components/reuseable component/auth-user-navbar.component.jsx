import React from 'react';

import userImage from '../../styles/images/userimg.png';
import '../../styles/second-navbar.css';

const registeredUserNavbar = () => {
  return (
        <div id="mySidenav" className="sidenav">
    <a href="#" className="closebtn"><i className="fa fa-chevron-circle-right" /></a>

    <a href={'/'}><img className="profile-image" src={userImage} /></a>
    <h1 id="nameside" />
    <a href="index.html"><span>Home</span></a>
    <a className="active" href="parties.html"><i className="far fa-handshake" /><span>Parties</span></a>
    <a href="candidates.html"><i className="fas fa-users" /><span>Candidates</span></a>
    <a href="history.html"><i className="fas fa-box-open" /><span>Results</span></a>
    <a href="#"><i className="fas fa-sign-out-alt" /><span>Sign out</span></a>

    </div>
    );
};

export default registeredUserNavbar;
