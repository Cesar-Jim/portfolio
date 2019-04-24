import React from "react";
import Hero from "../components/Hero";

const title1 = "My";
const title2 = "Skills";
const lead = "“Knowledge has a beginning but no end.”";
const next = "MY WORK";
const heroImage = require("../assets/images/two-hero.jpg");
const picture = require("../assets/images/skills.png");
const nextLink = "/skills";

const Skills = () => (
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
  </div>
);

export default Skills;
