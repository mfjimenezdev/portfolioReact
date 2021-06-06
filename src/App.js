import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Intro from './components/intro/intro';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route path="" component={Intro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
