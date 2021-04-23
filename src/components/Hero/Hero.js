import React from 'react';
import "./Hero.scss";

export default function Hero( {children} ) {
  return (
        <section className="hero">
            {children}
        </section>
  );
}