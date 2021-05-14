import "./Landing.scss";

import Hero from "../../components/Hero/Hero";
import Page from '../../components/Page/Page';
import Blob from "../../components/Blob/Blob";

export default function Landing() {

  return (
    <Page>
        <Hero>
            <div className="landing-blob">
              <Blob/>
            </div>
            <h1 className="landing-title">
              hi, i'm axel.
            </h1>
        </Hero>
    </Page>
  );
}