import React, { Component } from 'react';
import NavBar from '../reuseable component/navbar-component.jsx';
import Footer from '../reuseable component/footer-component.jsx';

import '../styles/media-queries/candidates-style.css';
import '../styles/media-queries/queries-style.css';
import homeImageOne from '../images/politician1.jpg';
import homeImageTwo from '../images/locals.jpg';


export default class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <header>
        <NavBar />
        <div className="wsskyline-text-box" >
        <h1 className="sitename">POLITICO</h1>
        <h1 className="sitetitle">Building trust through transparency</h1>
        <p className="siteintro">Credible elections are characterized by inclusiveness, transparency</p> <p className="siteintro"> and accountability, where all eligible citizens are given equal opportunities to vote.</p>
                            <p className="siteintro"> And that's what POLITICO does </p>

                            <a className="btn btn-full" href="/views/sign-up.html">Sign up</a>
                <a className="btn btn-full" id="small-screen" href="/views/sign-in.html">Sign in</a>
        </div>
        </header>
        <section className="section-features" id="ride">
            <div className="row">
                        <h2>As a Voter Politico helps you shine your eye</h2>
                        <p />
                        <p className="long-copy">
                                Your choice, Your vote
                                Sign in to vote for the credible candidates of your choice.
                                </p>
                                <img className="info" src={homeImageTwo} alt="create-account" />
                                </div>

                                <div className="row">
                <h2>As a politician Politico
                helps bring out your credibility </h2>
                <p className="long-copy">
                       Show voters your credibility. Sign up with Politico
                    </p>
                            <img className="info" src={homeImageOne} alt="Politician info" />
            </div>
        </section>
        <Footer />

        </React.Fragment>
    );
  }
}
