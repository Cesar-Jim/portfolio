import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

const title1 = "Cesar";
const title2 = "Jimenez";
const lead = "Front-End Developer";
const next = "MY SKILLS";
const heroImage = require("../assets/images/one-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");
const nextLink = "/skills";

const Landing = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      title1={title1}
      title2={title2}
      lead={lead}
      next={next}
      nextLink={nextLink}
    />
    <Intro />
  </div>
);

export default Landing;
