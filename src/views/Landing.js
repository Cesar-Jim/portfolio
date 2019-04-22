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
