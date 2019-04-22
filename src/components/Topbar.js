import React from "react";

const Topbar = () => (
  <div className="d-flex justify-content-center">
    <a
      href="https://www.linkedin.com/in/cesar-jimenez-ribeiro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ion-icon name="logo-linkedin" />
    </a>

    <a href="" target="_blank" rel="noopener noreferrer">
      {" "}
      <ion-icon name="school" />
    </a>

    <a
      href="https://github.com/Cesar-Jim"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ion-icon name="logo-github" />
    </a>
  </div>
);

export default Topbar;
