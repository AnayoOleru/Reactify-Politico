import React from 'react';
import { Link, IndexLink } from 'react-router';

import logo from '../../../public/images/pogo.png';
import '../../styles/signup.style.css';

const SignUpNavBar = () => {
  return (
    <div className="container">
<nav className="nav">
        <Link to="/"><img src={logo} /></Link>
        <ul>
            <li><Link to="/sign-up">Sign up</Link></li>
            <li><Link to="/sign-in">Sign in</Link></li>
        </ul>
    </nav>
    </div>

  );
};

export default SignUpNavBar;
