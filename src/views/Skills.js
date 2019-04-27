import React from "react";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Button from "../components/Button";

// Hero part configuration
const title1 = "Skills";
const lead =
  "“You don't have to be great to start, but you have to start to be great.”";
const next = "MY WORK";
const heroImage = require("../assets/images/two-hero.jpg");
const picture = require("../assets/images/cesar-picture-no-shadow.png");
const nextLink = "/projects";

// Skills languages & markup (LM) configuration
const iconJS = "fab fa-js-square";
const iconHTML = "fab fa-html5";
const iconCSS = "fab fa-css3-alt";
const descriptionLM =
  "JavaScript, HTML and CSS are a very important part of my coding experience, I consistently use them in my projects. In regards to Computer Science, I have a very good understanding of data structures, searching and sorting algorithms and the concepts of time and space complexities.";
const badgeCS = "CS";
const badgeMU = "Markup";
const badgePR = "Programming";

// Skills libraries and frameworks (LF) configuration
const iconReact = "fab fa-react";
const iconNode = "fab fa-node-js";
const iconBootstrap = "fab fa-bootstrap";
const descriptionLF =
  "Although I am currently specializing in React.js or anything related to the client side such as frameworks like Bootstrap, I've also had some degree of exposure to Node.js, Express and Passport, and have built a few projects applying server side programming.";
const badgeFR = "Frameworks";
const badgeLB = "Libraries";

// Skills databases (DB) configuration
const iconDatabase = "fas fa-database";
const iconServer = "fas fa-server";
const iconPersist = "fas fa-file-signature";
const descriptionDB =
  "In regards to non-relational databases my experience is using Google's Firebase service. Speaking about relational databases, I have setup from scratch and interacted with PostgreSQL, and used Sequelize as Object Relational Mapping (ORM) interface.";
const badgeDB = "Databases";
const badgeServer = "Server Side";
const badgeORM = "ORMs";

// Skills project management (PM) and version control (VC) configuration
const iconGit = "fab fa-git-square";
const iconPM = "fab fa-github-square";
const iconGitHub = "fas fa-tasks";
const descriptionPM =
  "Whenever I start a new project, one of the most critical aspects is to set a clear set of goals and scope. For that I incorporate agile development tools like Trello or Rally. Version control tools are also a must, I use git and GitHub on a regular basis.";
const badgeVC = "Version Control";
const badgePM = "Project Mgmt.";

// Skills complementary skills (CS) configuration
const iconAdobe = "fab fa-adobe";
const iconWordPress = "fab fa-wordpress";
const iconAnalytics = "fas fa-chart-line";
const descriptionCS =
  "As complementary skills, I have the capability of setting up Google and Facebook analytics. I am also proficient with WordPress and using image composition tools such as Photoshop and Illustrator. For sketching, I am familiar with Balsamiq and in the process of learning Figma.";
const badgeCMS = "CMS";
const badgeImg = "Adobe";
const badgeAnalytics = "Analytics";

// Button configuration
const btnCaption = "My Work";

const Skills = () => (
  <div>
    <Hero
      heroImage={heroImage}
      picture={picture}
      title1={title1}
      lead={lead}
      next={next}
      nextLink={nextLink}
    />
    <Skill
      icon1={iconJS}
      icon2={iconHTML}
      icon3={iconCSS}
      skillDescription={descriptionLM}
      badge1={badgeCS}
      badge2={badgePR}
      badge3={badgeMU}
    />
    <Skill
      icon1={iconReact}
      icon2={iconNode}
      icon3={iconBootstrap}
      skillDescription={descriptionLF}
      badge1={badgeFR}
      badge2={badgeLB}
    />
    <Skill
      icon1={iconDatabase}
      icon2={iconServer}
      icon3={iconPersist}
      skillDescription={descriptionDB}
      badge1={badgeDB}
      badge2={badgeORM}
      badge3={badgeServer}
    />
    <Skill
      icon1={iconGit}
      icon2={iconPM}
      icon3={iconGitHub}
      skillDescription={descriptionPM}
      badge1={badgeVC}
      badge2={badgePM}
    />
    <Skill
      icon1={iconAdobe}
      icon2={iconWordPress}
      icon3={iconAnalytics}
      skillDescription={descriptionCS}
      badge1={badgeCMS}
      badge2={badgeImg}
      badge3={badgeAnalytics}
    />
    <Button btnCaption={btnCaption} nextLink={nextLink} />
  </div>
);

export default Skills;
