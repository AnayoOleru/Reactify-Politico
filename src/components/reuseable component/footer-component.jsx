import React from 'react';

// get the current year for footer
function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer text-center">
      <p> POLITICO &copy; {getCurrentYear()}</p>
    </div>
  );
};

export default Footer;
