import React, { Component } from 'react';
import NavBar from '../reuseable component/navbar-component.jsx';
import Footer from '../reuseable component/footer-component.jsx';
import '../../styles/home.style.css';
import '../../styles/media-queries/queries.style.css';

import homeImageOne from '../../styles/images/politician1.jpg';
import homeImageTwo from '../../styles/images/locals.jpg';


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="section-features" id="ride">
          <div className="home-page-details">
            <h2 className="home-page-details-title">As a Voter Politico helps you shine your eye</h2>
            <p />
            <p className="home-page-details-voters">
              Your choice, Your vote
              Sign in to vote for the credible candidates of your choice.
                                </p>
            <img className="info" src={homeImageTwo} alt="create-account" />
          </div>
          <br />
          <br />

          <div className="home-row">
            <h2 className="home-page-details-title">As a politician Politico
                helps bring out your credibility </h2>
            <p className="home-page-details-voters">
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
