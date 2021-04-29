import React, { useEffect, useState } from 'react';
import "./Navigation.scss";
import NavigationBackground from "./NavigationBackground";
import { Link } from 'react-router-dom';

export default function Navigation( {navOpen, setNavOpen} ) {

  const [navItems, setNavItems] = useState([
    {link : "/", label : "home", visibility : "hidden" },
    {link : "/about", label : "about", visibility : "hidden" },
    {link : "/portfolio", label : "portfolio", visibility : "hidden" },
    {link : "/pricing", label : "pricing", visibility : "hidden" },
    {link : "/articles", label : "articles", visibility : "hidden" },
    {link : "/contact", label : "contact", visibility : "hidden" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < navItems.length; i++) {
        setTimeout(() => {
          let newState = [...navItems];
          newState[i].visibility = "visible";
          setNavItems(newState);
        }, 
        100 * i);
      }
    }, 500);
  }, []);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <NavigationBackground />
      <div className="navigation-container">
        <nav>
          <ul className="menu">
              {navItems.map((item, index) => (
                <li key={index} className={item.visibility}><Link to={item.link || '/'} onClick={handleClick}>{item.label}</Link></li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}