import React from 'react';
import logo from '../../styles/images/pogo.png';

const NavBar = () => {
  return (
    <header className="hero-page">
    <nav>
        <div className="nav-row">
            <a href={'/'}><img src={logo} alt="" className="homepage-logo" /></a>
            <a><img alt="Politico logo" className="logo-black" /></a>
            <ul className="homepage-main-nav">
                <li className="homepage-main-nav-list"><a className="homepage-main-nav-list-title" href={'/sign-in'}>Sign in</a></li>
                <li className="homepage-main-nav-list"><a className="homepage-main-nav-list-title" href={'/sign-up'}>Sign up</a></li>
            </ul>
        </div>
    </nav>
    <div className="wsskyline-text-box">
        <h1 className="sitename">POLITICO </h1>
        <h1 className="sitetitle">Building trust through transparency</h1>
            <p className="siteintro">Credible elections are characterized by inclusiveness, transparency <br /> and accountability, where all eligible citizens are given equal opportunities to vote.<br />
                    And that's what POLITICO does
</p>
        <a className="homepage-nav-btn" href={'/sign-up'}>Sign up</a>
        <a className="homepage-nav-btn" id="homepage-small-screen" href={'/sign-in'}>Sign in</a>
        
    </div>

</header>

  );
};

export default NavBar;
