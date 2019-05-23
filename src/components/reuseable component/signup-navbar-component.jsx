import React from 'react';
import { Link, IndexLink } from 'react-router';

import logo from '../../../public/images/pogo.png';
import '../../styles/signup.style.css';

const SignUpNavBar = () => {
  return (
    <div className="container">
<nav className="nav">
        <a href={'/'}><img src={logo} /></a>
        <ul>
            <li><a href={'/sign-up'}>Sign up</a></li>
            <li><a href={'/sign-in'}>Sign in</a></li>
        </ul>
    </nav>
    </div>

  );
};

export default SignUpNavBar;
