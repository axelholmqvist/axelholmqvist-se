import React, { useState } from 'react';
import "./Hamburger.scss";

export default function Hamburger() {

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(true);
  };

  return (
    <div className="hamburger-container" onClick={handleClick}>
      <div className="burger" />
    </div>
  )
}