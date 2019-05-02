import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import "../assets/styles/contact.css";

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
  </div>
);

export default Contact;
