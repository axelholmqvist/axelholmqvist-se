import React from 'react';
import "./Navigation.scss";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <header>
      <h1>AH.</h1>
      <nav>
        <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}