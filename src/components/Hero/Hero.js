import React from 'react';
import "./Hero.scss";

export default function Hero( {children, backgroundImage} ) {
  var background;

  if (backgroundImage) {
    background = {  
      backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/" + backgroundImage})`,
    };
  } else {
    background = { backgroundImage: 'none' };
  }

  return (
        <section className="hero" style={background}>
            {children}
        </section>
  );
}