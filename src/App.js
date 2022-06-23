import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import About from './containers/About';
import Experience from './containers/Experience';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Resume from './containers/Resume';

// styles
import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import './styles/stars.scss';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/experience">
          <Experience />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>

        <Route path="*">
            <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
