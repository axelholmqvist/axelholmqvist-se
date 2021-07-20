import React, { useEffect, useState } from 'react';
import "./Header.scss";

import Hamburger from "../Hamburger/Hamburger";
import Logotype from "../Logotype/Logotype";

export default function Header( {navOpen, setNavOpen} ) {

  const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            console.log(scroll);
            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

  return (
    <header>
      <div className="side-progress-bar" style={{width: `${scroll * 100}%`}} />
      <div className="navigation-bar">
        <Logotype navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </header>
  )
}