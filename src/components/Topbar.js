import React from "react";
import "../assets/styles/topbar.css";

const Topbar = () => (
  <div className="d-flex justify-content-center">
    <a
      href="https://www.linkedin.com/in/cesar-jimenez-ribeiro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-linkedin" />
    </a>

    <a
      href="https://www.dropbox.com/s/uqjlue6u2imzu8u/CesarJimenez.pdf?dl=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fas fa-graduation-cap" />
    </a>

    <a
      href="https://github.com/Cesar-Jim"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github" />
    </a>
  </div>
);

export default Topbar;
