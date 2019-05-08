import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import "../assets/styles/contact.css";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-36717008-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// Hero configuration
const title1 = "Contact";
const lead = "“Hello World!” -B. Kernigham";
const heroImage = require("../assets/images/five-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");

// Next section Button configuration
const btnCaption = "Message me";
const nextLink = "/contact";

const Contact = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      title1={title1}
      lead={lead}
      nextLink={nextLink}
    />
    <h2 className="email">
      email:
      <br />
      cijgr@hotmail.com
    </h2>
    <h2 className="phone" id="phone">
      phone:
      <br />
      +52 1 (55) 4484-9228
    </h2>

    <h2 className="phone" id="phone">
      meetings:
    </h2>
    <div className="row calendlyWidget">
      <div className="col-12 calendly-inline-widget">
        <iframe
          src="https://calendly.com/cesarjim"
          width="100%"
          height="700"
          scrolling="no"
          frameborder="0"
        />
      </div>
    </div>
  </div>
);

export default Contact;
