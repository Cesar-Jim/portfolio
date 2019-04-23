import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

const name = "Cesar";
const lastName = "Jimenez";
const lead = "FRONT-END/UI DEVELOPER";
const next = "MY SKILLS";
const heroImage = require("../assets/images/one-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");
const nextLink = "/skills";

const Landing = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      name={name}
      lastName={lastName}
      lead={lead}
      next={next}
      nextLink={nextLink}
    />
    <Intro />
  </div>
);

export default Landing;
