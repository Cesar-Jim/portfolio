import React, { Component } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Button from "../components/Button";
import "../assets/styles/landing.css";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-36717008-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// Hero configuration
const title1 = "Cesar";
const title2 = "Jimenez";
const lead = "Front-end Web Developer";
const next = "MY SKILLS";
const heroImage = require("../assets/images/one-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");
const nextLink = "/skills";

// Button configuration
const btnCaption = "My Skills";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref="test">
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
        <Button btnCaption={btnCaption} nextLink={nextLink} />
      </div>
    );
  }
}

export default Landing;
