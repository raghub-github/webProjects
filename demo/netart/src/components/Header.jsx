import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
    </header>
  );
};

export default Header;
