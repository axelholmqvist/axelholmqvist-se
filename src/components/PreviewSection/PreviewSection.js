import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./PreviewSection.scss";

export default function PreviewSection( {children, title, link, linkText, previewImage, layoutType} ) {
  
  var image = {  
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/" + previewImage})`,
  };

  const [descriptionClass, setDescriptionClass] = useState("");

  function onEnterHandler() {
    setDescriptionClass("preview-description-hover");
    //console.log("On mouse enter.")
  }

  function onLeaveHandler() {
    setDescriptionClass("");
    //console.log("On mouse enter.")
  }

  return (
    <section className="preview-section">
        <div className="preview-description-container">
          <div className={"preview-description " + descriptionClass}>
              <h4 className="preview-title title-3">
                {title}
              </h4>
              <div className="item-divider"/>
              <div className="preview-excerpt">
                  {children}
              </div>
              <Link to={link} className="arrow-link" onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>{linkText}</Link>
          </div>
        </div>
    </section>
  );
}