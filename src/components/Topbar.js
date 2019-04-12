import React from "react";

// Importing Route and Link. Required for proper routing
import { Link } from "react-router-dom";

const Topbar = () => (
  <section className="topbar">
    <Link to="/contact">email</Link> | <Link to="/contact"> mobile</Link>
  </section>
);

export default Topbar;
