import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./PreviewSection.scss";

export default function PreviewSection( {children, title, link, linkText, previewImage, layoutType} ) {
  
  var image = {  
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/" + previewImage})`,
  };

  var sectionClass;
  if (layoutType === "left") {
    sectionClass = "preview-section-left";
  } else {
    sectionClass = "preview-section-right";
  }

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
    <section className={"preview-section " + sectionClass}>
        {layoutType === "right" &&
          <div className="preview-image" style={image}/>
        }

        <div className="preview-description-container">
          <div className={"preview-description " + descriptionClass}>
              <h4 className="preview-title title-1">
                {title}
              </h4>
              <div className="preview-excerpt">
                  {children}
              </div>
              <Link to={link} className="arrow-link" onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>{linkText}</Link>
          </div>
        </div>
        
        {layoutType === "left" &&
          <div className="preview-image" style={image}/>
        } 
    </section>
  );
}