import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../styles/navbar-style.css';
import logo from '../images/pogo.png';
import '../styles/media-queries/candidates-style.css';
import '../styles/media-queries/queries-style.css';

const NavBar = () => {
  return (
    <nav>
      <div className="row">
        <a><img src={logo} className="logo" /></a>
        <a><img src="../images/pogo.png" className="logo-black"/></a>
        <ul className="main-nav">
          <li><Link to="/sign-in">Sign in</Link></li>
          <li><Link to="/sign-up">Sign up</Link></li>
        </ul>
      </div>
    </nav>

  );
};

export default NavBar;
