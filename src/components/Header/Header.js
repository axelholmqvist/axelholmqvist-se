import React from 'react';
import "./Header.scss";

import Hamburger from "../Hamburger/Hamburger";

export default function Header( {navOpen, setNavOpen} ) {
  return (
    <header>
      <h1>ah.</h1>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  )
}