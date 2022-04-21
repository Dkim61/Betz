import React from "react";
import Logo from '../assets/Betz.png';

function Header() {
  return (
    <div className="header">
        <img src={Logo} alt="betz Logo" height="220"/>
    </div>
  );
}

export default Header;
