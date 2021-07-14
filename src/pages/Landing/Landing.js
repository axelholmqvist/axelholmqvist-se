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
        <div className="landing-particles">
              {<Particles/>}
        </div>
        <Hero>
            <div className="landing-blob">
              {<Blob/>}
            </div>
            <div className="landing-title">
            <h1 className="title-1">hi, i'm axel.</h1>
            <p>i'm at the crossroads between</p>
            <h3 className="title-3">UX/UI design,<br/>front-end development,<br/>graphic design,<br/>& branding.</h3>
            </div>
        </Hero>
        <PreviewSection title="About me." link="/about-me" linkText="Read more" layoutType="left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
              Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
            </p>
        </PreviewSection>
        <PreviewSection title="Portfolio." link="/portfolio" linkText="Take a look" layoutType="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
              Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
            </p>
        </PreviewSection>
        <PreviewSection title="Articles." link="/articles" linkText="Read more" layoutType="left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
              Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
            </p>
        </PreviewSection>
        <PreviewSection title="Pricing." link="/pricing" linkText="Read more" layoutType="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
              Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
            </p>
        </PreviewSection>
        <PreviewSection title="Contact." link="/contact" linkText="Contact me" layoutType="left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt urna, a maximus quam. 
              Nullam augue sem, feugiat sed elit volutpat, venenatis maximus est.
            </p>
        </PreviewSection>
      </div>
    </Page>
  );
}