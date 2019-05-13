import React from "react";
import "../assets/styles/topbar.css";

const Topbar = () => (
  <div className="d-flex justify-content-center">
    <a
      href="https://www.linkedin.com/in/cesar-jimenez-ribeiro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin" />
    </a>

    <a
      href="https://www.dropbox.com/s/f93xp91ydrb9vb8/CesarJimenez.pdf?dl=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-graduation-cap" />
    </a>

    <a
      href="https://github.com/Cesar-Jim"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github" />
    </a>
  </div>
);

export default Topbar;
