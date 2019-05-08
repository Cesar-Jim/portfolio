import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Project from "../components/Project";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-36717008-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// Hero configuration
const title1 = "Projects";
const lead =
  "“Find a job you enjoy doing, and you will never have to work a day in your life.” -M. Twain";
const heroImage = require("../assets/images/three-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");
const nextLink = "/resume";

// Project #1 configuration: Tribeapp (TA)
const projectPictureTA = require("../assets/images/tribeapp.jpg");
const projectNameTA = "TRIBEAPP";
const liveLinkTA = "http://cesar-jimenez-tribeapp.herokuapp.com/";
const liveCaptionTA = "Tribeapp";
const ghLinkTA = "https://github.com/Cesar-Jim/tribeapp";
const ghCaptionTA = "Github";
const projectDescriptionTA =
  "TRIBEAPP is a chat service that allows registered users to create chat rooms called 'Tipis' and / or participate in discussions on any other Tipis of their choice.";
const projectTechnologiesTA =
  "Node.js, JavaScript (ES6), Express, Passport, Bcrypt.js, PostgreSQL, Sequelize, EJS, and Jasmine.";
const projectBuiltTimeTA = "10 days.";

// Project #2 configuration: UVA (UVA)
const projectPictureUVA = require("../assets/images/uva.jpg");
const projectNameUVA = "UVA";
const liveLinkUVA = "http://cesar-jimenez-uva.herokuapp.com/";
const liveCaptionUVA = "UVA";
const ghLinkUVA = "https://github.com/Cesar-Jim/uva";
const ghCaptionUVA = "Github";
const projectDescriptionUVA =
  "UVA is a social website devoted to wine rating. Although the page content is open to the public, only resgistered users can comment about and rate wine bottles.";
const projectTechnologiesUVA =
  "Node.js, JavaScript (ES6), Express, Passport, Bcrypt.js, PostgreSQL, Sequelize, Animate.css, Sendgrid, EJS, HTML, CSS and Jasmine.";
const projectBuiltTimeUVA = "15 days.";

// Project #3 configuration: Jams(JM)
const projectPictureJM = require("../assets/images/jams.jpg");
const projectNameJM = "JAMS";
const liveLinkJM = "#";
const liveCaptionJM = "Jams";
const ghLinkJM = "https://github.com/Cesar-Jim/bloc-jams-react";
const ghCaptionJM = "Github";
const projectDescriptionJM =
  "JAMS is a small-scaled Spotify type of application. It has the main functionalities of any music-player app.";
const projectTechnologiesJM = "React.js, JavaScript (ES6), HTML and CSS.";
const projectBuiltTimeJM = "7 days.";

// Project #4 configuration: Blocipedia(BP)
const projectPictureBP = require("../assets/images/blocipedia.jpg");
const projectNameBP = "BLOCIPEDIA";
const liveLinkBP = "http://cesar-jimenez-blocipedia-node.herokuapp.com/";
const liveCaptionBP = "Blocipedia";
const ghLinkBP = "https://github.com/Cesar-Jim/blocipedia-node";
const ghCaptionBP = "Github";
const projectDescriptionBP =
  "BLOCIPEDIA is a social wiki sharing application with markdown language capabilities. Premium users have the ability create private wikis and add collaborators.";
const projectTechnologiesBP =
  "Node.js, JavaScript (ES6), Express, Passport, Bcrypt.js, PostgreSQL, Sequelize, Sendgrid, Stripe, EJS, HTML, CSS and Jasmine.";
const projectBuiltTimeBP = "15 days.";

// Button configuration
const btnCaption = "My Resume";

const Projects = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      title1={title1}
      lead={lead}
      nextLink={nextLink}
    />
    <Project
      projectPicture={projectPictureTA}
      projectName={projectNameTA}
      projectDescription={projectDescriptionTA}
      projectTechnologies={projectTechnologiesTA}
      projectBuiltTime={projectBuiltTimeTA}
      liveLink={liveLinkTA}
      liveCaption={liveCaptionTA}
      ghLink={ghLinkTA}
      ghCaption={ghCaptionTA}
    />
    <Project
      projectPicture={projectPictureUVA}
      projectName={projectNameUVA}
      projectDescription={projectDescriptionUVA}
      projectTechnologies={projectTechnologiesUVA}
      projectBuiltTime={projectBuiltTimeUVA}
      liveLink={liveLinkUVA}
      liveCaption={liveCaptionUVA}
      ghLink={ghLinkUVA}
      ghCaption={ghCaptionUVA}
    />
    <Project
      projectPicture={projectPictureJM}
      projectName={projectNameJM}
      projectDescription={projectDescriptionJM}
      projectTechnologies={projectTechnologiesJM}
      projectBuiltTime={projectBuiltTimeJM}
      liveLink={liveLinkJM}
      liveCaption={liveCaptionJM}
      ghLink={ghLinkJM}
      ghCaption={ghCaptionJM}
    />

    <Project
      projectPicture={projectPictureBP}
      projectName={projectNameBP}
      projectDescription={projectDescriptionBP}
      projectTechnologies={projectTechnologiesBP}
      projectBuiltTime={projectBuiltTimeBP}
      liveLink={liveLinkBP}
      liveCaption={liveCaptionBP}
      ghLink={ghLinkBP}
      ghCaption={ghCaptionBP}
    />

    <Button btnCaption={btnCaption} nextLink={nextLink} />
  </div>
);

export default Projects;
