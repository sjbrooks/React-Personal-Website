/** Routes: Component that performs client-side routing
 *
 * Props: (none)
 *
 * State: (none)
 * 
 * Parent: Used in App component
 * 
 * Children: Uses Home, About, Projects, Connect components
 */


import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Connect from "./Connect"


function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>

      <Route exact path="/connect">
        <Connect />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
