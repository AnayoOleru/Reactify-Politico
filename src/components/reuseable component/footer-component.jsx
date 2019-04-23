import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../styles/footer-style.css';
// import '../images/pogo.png';
import '../styles/media-queries/candidates-style.css';
import '../styles/media-queries/queries-style.css';

const Footer = () => {
  return (
    <footer>
    <div className="row">
        <div className="col span-1-of-2">
            <ul className="footer-nav">
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
    <div className="row">
        <p>
            Copyright &copy; 2019 by Politico. All rights reserved.
        </p>
    </div>
      </footer>


  );
};

export default Footer;
