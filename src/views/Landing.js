import React from "react";

const Landing = () => (
  <div className="container hero-landing">
    <div className="row d-none d-lg-block">
      <span>
        <img
          src={require("../assets/images/one-hero.jpg")}
          className="img-fluid"
          alt="landing"
        />
      </span>
      <div className="col-xl-6 offset-xl-5 col-lg-7 offset-lg-4 rightSideHero d-none d-lg-block">
        <div className="customDiv ratio">
          <img
            src={require("../assets/images/cesar-picture-no-shadow.png")}
            className="img-responsive img-rounded"
            alt="landing"
          />
          <p className="headingLanding">
            Cesar <br /> Jimenez
          </p>
          <p className="lead">&nbsp;&nbsp;FRONT-END/UI DEVELOPER</p>
          <a href="/skills" className="btn btn-primary btn-lg landingBtn">
            MY SKILLS
          </a>
        </div>
        <div className="col-xl-1 col-lg-2" />
      </div>
      <div className="row col-lg-8 offset-lg-2 d-none d-lg-block cardAbout">
        <div class="text-justify">
          <div>
            <p class="card-title cardAboutTitle">Welcome to my site!</p>
            <p>
              My name is Cesar, and I am a professional Electronic Engineer
              transitioning into the Software Industry.
            </p>
            <p>
              My love for coding, a passion for design, and my willingness to
              help others are the drivers that shape my current career goals.
            </p>
          </div>
        </div>
      </div>
      <div className="row col-lg-2" />
    </div>

    <div className="row d-lg-none d-xl-none">
      <div className="customDivSmall ratio">
        <img
          src={require("../assets/images/cesar-picture-no-shadow.png")}
          className="img-fluid img-rounded-small"
          alt="landing"
        />
        <p className="headingLandingSmall">
          Cesar <br />
          Jimenez
        </p>
        <hr />
        <p className="leadSmall">&nbsp;&nbsp;FRONT-END/UI DEVELOPER</p>

        <div className="row col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 cardAboutSmall">
          <div class="text-justify myCard">
            <div>
              <p>
                My name is Cesar, and I am a professional Electronic Engineer
                transitioning into the Software Industry.
              </p>
              <p>
                My love for coding, a passion for design, and my willingness to
                help others are the drivers that shape my current career goals.
              </p>
            </div>
          </div>
        </div>
        <div className="row  col-xs-2 col-sm-2 col-md-2" />

        <div className="bkgBtn">
          <span>
            <img
              src={require("../assets/images/one-hero.jpg")}
              className="img-fluid"
              alt="landing"
            />
          </span>
          <a href="/skills" className="btn btn-primary btn-lg landingBtnSmall">
            MY SKILLS
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
