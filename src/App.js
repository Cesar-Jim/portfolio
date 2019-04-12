import React, { Component } from "react";

// Importing Route and Link. Required for proper routing
import { Route } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
