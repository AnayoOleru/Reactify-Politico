import React from 'react';
import '../../styles/footer-style.css';

const Footer = () => {
  return (
    <footer className="global-footer">
    <div className="row">
        <div className="col span-1-of-2">
            <ul className="global-footer-nav">
                <li className="global-footer-nav-list"><a className="global-footer-nav-list-title" href={"/about-us"}>About us</a></li>
                <li className="global-footer-nav-list"><a className="global-footer-nav-list-title" href={"/contact-us"}>Contact us</a></li>
                <li className="global-footer-nav-list"><a className="global-footer-nav-list-title" href={"/priavcy-policy"}>Privacy Policy</a></li>
            </ul>
        </div>
    </div>
    <div className="row">
        <p className="global-footer-nav-copyright">
            Copyright &copy; 2019 by Politico. All rights reserved.
        </p>
    </div>
      </footer>


  );
};

export default Footer;
