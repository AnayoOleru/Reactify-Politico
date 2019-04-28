import React from 'react';
import { Link, IndexLink } from 'react-router';
// import '../../styles/home-style.css';
// import '../../styles/media-queries/queries-style.css';


import logo from '../../../public/images/pogo.png';


// import '../styles/media-queries/queries-style.css';

const NavBar = () => {
  return (
    <header>
    <nav>
        <div className="row">
            <a><img src={logo} alt="Politico logo" className="logo" /></a>
            <a><img alt="Politico logo" className="logo-black" /></a>
            <ul className="main-nav">
                <li><Link to="/sign-in">Sign in</Link></li>
                <li><Link to="/sign-up">Sign up</Link></li>
            </ul>
        </div>
    </nav>
    <div className="wsskyline-text-box">
        <h1 className="sitename">POLITICO </h1>
        <h1 className="sitetitle">Building trust through transparency</h1>
            <p className="siteintro">Credible elections are characterized by inclusiveness, transparency <br /> and accountability, where all eligible citizens are given equal opportunities to vote.<br />
                    And that's what POLITICO does
</p>
        <Link to="/sign-up" className="btn btn-full">Sign up</Link>
        <Link to="/sign-in" className="btn btn-full" id="small-screen">Sign in</Link>
        
    </div>

</header>

  );
};

export default NavBar;
