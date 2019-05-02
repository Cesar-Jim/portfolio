import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import "../assets/styles/resume.css";
import Timeline from "../components/Timeline";

// Hero configuration
const title1 = "Resume";
const lead =
  "“Find your focus by seeking all that is good in your life.” -L. Myers";
const heroImage = require("../assets/images/four-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");

// Resume download Button configuration
const resumeCaption = "Get resume";
const resumeLink = "#";
// Next section Button configuration
const btnCaption = "Contact me";
const nextLink = "/contact";

const Resume = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      title1={title1}
      lead={lead}
      nextLink={nextLink}
    />
    <Timeline />
    <div className="resumeLink">
      <a
        href="https://www.dropbox.com/s/78gbiha6mp2153s/CesarJimenez.pdf?dl=0"
        target="_blank"
        className="downloadLink"
      >
        &nbsp;Download full resume
      </a>
    </div>
    <Button btnCaption={btnCaption} nextLink={nextLink} />
  </div>
);

export default Resume;
