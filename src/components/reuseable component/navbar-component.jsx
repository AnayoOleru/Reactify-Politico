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
        <div className="nav-row">
            <a href={'/'}><img src={logo} alt="" className="homepage-logo" /></a>
            <a><img alt="Politico logo" className="logo-black" /></a>
            <ul className="main-nav">
                <li><a href={'/sign-in'}>Sign in</a></li>
                <li><a href={'/sign-up'}>Sign up</a></li>
            </ul>
        </div>
    </nav>
    <div className="wsskyline-text-box">
        <h1 className="sitename">POLITICO </h1>
        <h1 className="sitetitle">Building trust through transparency</h1>
            <p className="siteintro">Credible elections are characterized by inclusiveness, transparency <br /> and accountability, where all eligible citizens are given equal opportunities to vote.<br />
                    And that's what POLITICO does
</p>
        <a className="btn btn-full" href={'/sign-up'}>Sign up</a>
        <a className="btn btn-full" id="small-screen" href={'/sign-in'}>Sign in</a>
        
    </div>

</header>

  );
};

export default NavBar;
