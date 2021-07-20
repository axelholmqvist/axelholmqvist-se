import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.scss";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  var image = {  
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/axelholmqvist.jpg"})`,
  };

  const [hoverClass, setHoverClass] = useState("");

  function onEnterHandler() {
    setHoverClass("contact-email-hover");
    //console.log("On mouse enter.")
  }

  function onLeaveHandler() {
    setHoverClass("");
    //console.log("On mouse enter.")
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <div className={"footer-box-wrapper " + hoverClass}>
          <div className="footer-box-item">
            <h3 className="title-3">
              say hi.
            </h3>
            <div className="item-divider"/>
            <div className="contact-email">
              <Link to={"mailto:hi@axelholmqvist.se"} className="arrow-link" onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>hi@axelholmqvist.se</Link>
            </div>
            <p>
              I love to design and make things.<br/>
              Eventhough I have a full-time job, I’m still offering my services as a part time freelancer.<br/>
            </p>
            <p>
              Let’s talk!
            </p>
            <p>
              <b>– Axel Holmqvist, Malmø</b>
            </p>
            <div className="icon-button">
              <a href="https://linkedin.com/in/axelholmqvist/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
              </a>
            </div>
          </div>
          <div className="footer-box-item">
            <div className="image-wrapper">
              <div className="image"
                style={image}/>
            </div>
          </div>
        </div>
        <div className="footer-text-wrapper">
          <p className="smallest">© 2021 – All rights reserved – Axel Holmqvist<br/>Designed and developed by yours truly.</p>       
        </div>
      </div>
    </footer>
  )
}