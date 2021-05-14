import React from 'react';
import "./Header.scss";

import Hamburger from "../Hamburger/Hamburger";
import Logotype from "../Logotype/Logotype";

export default function Header( {navOpen, setNavOpen} ) {
  return (
    <header>
      <Logotype navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  )
}