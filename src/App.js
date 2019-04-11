import React, { Component } from "react";
import "./App.css";

// Importing Route and Link. Required for proper routing
import { Route, Link } from "react-router-dom";

// Importing components
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/resume"> Resume</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </nav>
          <h1>Cesar Jimenez</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </main>
      </div>
    );
  }
}

export default App;
