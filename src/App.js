import './App.scss';

import React, { useEffect, useState } from 'react';

import Routes from "./routes/Routes";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [navOpen]);

  return (
    <div className="container">
      <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
      { navOpen &&
        <Navigation navOpen={navOpen} setNavOpen={setNavOpen}/>
      }
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
