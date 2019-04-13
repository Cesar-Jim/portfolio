import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-md navbar-light bg-light justify-content-center"
    id="navbar"
  >
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav nav-justified">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
            SKILLS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            WORK
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            RESUME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
