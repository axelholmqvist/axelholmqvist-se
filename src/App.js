import './App.scss';

import React, { useState } from 'react';

import Routes from "./routes/Routes";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [navOpen, setNavOpen] = useState(false);

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
