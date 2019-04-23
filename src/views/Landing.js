import React from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

const name = "Cesar";
const lastName = "Jimenez";
const lead = "FRONT-END/UI DEVELOPER";
const next = "MY SKILLS";

const Landing = () => (
  <div>
    <Hero name={name} lastName={lastName} lead={lead} next={next} />
    <Intro />
  </div>
);

export default Landing;
