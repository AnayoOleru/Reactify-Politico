import React from 'react';
import { Link, IndexLink } from 'react-router';

import logo from '../images/pogo.png';
import '../styles/signup.style.css';

const SignUpNavBar = () => {
  return (
    <div className="container">
<nav>
        <a href="index.html"><img src={logo} /></a>
        <ul>
            <li><a href="sign-up.html">Sign up</a></li>
            <li><a href="sign-in.html" className="active">Sign in</a></li>
        </ul>
    </nav>
    </div>

  );
};

export default SignUpNavBar;
