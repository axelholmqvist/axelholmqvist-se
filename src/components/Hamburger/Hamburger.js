import React from 'react';
import "./Hamburger.scss";

export default function Hamburger( {navOpen, setNavOpen} ) {

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="hamburger-container">
      <div className="hamburger" onClick={handleClick}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </div>
    </div>
  )
}