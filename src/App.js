import React, { Component } from "react";

// Importing Route and Link. Required for proper routing
import { Route } from "react-router-dom";

// Components Import
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

// Libraries import
import "bootstrap/dist/css/bootstrap.min.css";

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-36717008-1");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Topbar />
          <Navbar />
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/github"
            component={() => {
              window.location = "https://github.com/Cesar-Jim";
              return null;
            }}
          />
        </main>
        <div>
          <Footer className="footer" />
        </div>
      </div>
    );
  }
}

export default App;
