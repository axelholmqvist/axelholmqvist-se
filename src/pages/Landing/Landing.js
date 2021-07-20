import "./Landing.scss";

import Hero from "../../components/Hero/Hero";
import Page from '../../components/Page/Page';
import Blob from "../../components/Blob/Blob";
import PreviewSection from "../../components/PreviewSection/PreviewSection";
import Particles from "../../components/Particles/Particles";

export default function Landing() {

  return (
    <Page>
      <div className="landing-page">
        {/*
        <div className="landing-particles">
              {<Particles/>}
        </div>
        */}
        <Hero>
            <div className="landing-blob">
              {<Blob/>}
            </div>
            <div className="landing-title">
            <h1 className="title-1">hi, i'm <i><u>axel</u></i>.</h1>
            <p>i'm at the crossroads between</p>
            <h3 className="title-3">UX/UI design,<br/>front-end development,<br/>graphic design,<br/>& branding.</h3>
            <p>M.Sc. Information & Communication Technologies Engineer &gt; Usability & Design
            UX/UI Design Lead at Homepal</p>
            <p><b>Adobe Creative suite and a great design mind<br/>
            +<br/>
            React.js and user-centered thinking.</b></p>
            </div>
        </Hero>
        <div className="preview-section-wrapper">
          <PreviewSection title="about me." link="/about-me" linkText="read more">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
                Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
              </p>
          </PreviewSection>
          <PreviewSection title="work." link="/work" linkText="take a look">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
                Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
              </p>
          </PreviewSection>
          <PreviewSection title="articles." link="/articles" linkText="read more">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
                Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
              </p>
          </PreviewSection>
          <PreviewSection title="services." link="/services" linkText="read more">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
                Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
              </p>
          </PreviewSection>
          <PreviewSection title="contact." link="/contact" linkText="contact me">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
                Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
              </p>
          </PreviewSection>
        </div>
      </div>
    </Page>
  );
}