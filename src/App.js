import React from 'react';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './styles/style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
  </Router>
  );
}

export default App;
