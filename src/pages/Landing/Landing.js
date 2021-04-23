import React from 'react';
import "./Landing.scss";

import Hero from "../../components/Hero/Hero";
import Page from '../../components/Page/Page';

export default function Landing() {
  return (
    <Page>
        <Hero>
            <h2>I'm Axel Holmqvist.</h2>
            <h1>A digital designer.</h1>
        </Hero>
    </Page>
  );
}