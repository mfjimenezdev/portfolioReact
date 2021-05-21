import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Intro from './components/intro/intro';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/about" component={About} />
          <Route path="" component={Intro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
