import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      {/* 
      <div className="footer-column" id="footer-column-left">
        <h3>x</h3>
      </div>
      */}
      <div className="footer-column" id="footer-column-mid">
      <p className="smallest">© 2021 – All rights reserved – Axel Holmqvist<br/>Designed and developed by yours truly.</p>
      </div>
      {/* 
      <div className="footer-column" id="footer-column-right">
        <h3 className="dot-link"><Link to="/contact">contact</Link></h3>
      </div>
      */}
    </footer>
  )
}