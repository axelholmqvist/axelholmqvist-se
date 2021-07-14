import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Page from '../../components/Page/Page';

import "./PageNotFound.scss";

export default function PageNotFound() {

  return (
    <Page>
      <Hero>
        <h2>Woops! Lost in space?</h2>
        <p>Looks like the page you're looking for does not exist.</p>
        <Link to="/" className="arrow-link">Take me home</Link>
      </Hero>
    </Page>
  );
}