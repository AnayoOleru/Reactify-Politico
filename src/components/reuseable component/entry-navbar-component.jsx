import React from 'react';

import logo from '../../../public/images/pogo.png';
import '../../styles/entry-nav.style.css';

const EntryNavBar = () => {
  return (
    <div className="container">
<nav className="entry-nav">
        <a className="entry-nav-logo-link" href={'/'}><img className="entry-nav-logo" src={logo} /></a>
        <ul className="entry-nav-list-head">
            <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/sign-up'}>Sign up</a></li>
            <li className="entry-nav-list" ><a className="entry-nav-list-child" href={'/sign-in'}>Sign in</a></li>
        </ul>
    </nav>
    </div>

  );
};

export default EntryNavBar;
