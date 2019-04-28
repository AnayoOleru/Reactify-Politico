import React from 'react';
import { Link, IndexLink } from 'react-router';

// import '../styles/index.css';
// import '../styles/footer-style.css';
// import '../styles/media-queries/candidates-style.css';
// import '../styles/media-queries/queries-style.css';
// import '../../styles/home-style.css';
import '../../styles/media-queries/queries-style.css';

const Footer = () => {
  return (
    <footer>
    <div className="row">
        <div className="col span-1-of-2">
            <ul className="footer-nav">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
                <li><Link to="/priavcy-policy">Privacy Policy</Link></li>
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
