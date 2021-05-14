import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-areas">
        <h3>design.<br/>branding.<br/>development.<br/>ux.</h3>
      </div>
      <div className="footer-copyright">
      <p className="smallest">© 2021 Axel Holmqvist Digital Design<br/>Designed and developed by yours truly.</p>
      </div>
      <div className="footer-contact">
        <h3>contact.</h3>
      </div>
    </footer>
  )
}