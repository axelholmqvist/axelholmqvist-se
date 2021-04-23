import React, { useState } from 'react';
import "./Hamburger.scss";

export default function Hamburger( {navOpen, setNavOpen} ) {

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="hamburger-container" onClick={handleClick}>
      <div className="burger" />
    </div>
  )
}