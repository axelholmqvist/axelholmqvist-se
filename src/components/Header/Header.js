import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

import Hamburger from "../Hamburger/Hamburger";

export default function Header( {navOpen, setNavOpen} ) {
  return (
    <header>
      <h1>AH.</h1>
      <nav>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  )
}