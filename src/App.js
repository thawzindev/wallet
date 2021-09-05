import React from 'react';
import Home from './Components/Home';
import Topup from './Components/Topup/Topup';
import ConfirmPage from './Components/Confirm/ConfirmPage';
import Passcode from './Components/Passcode/Passcode';
import SuccessPage from './Components/Success/SuccessPage';
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

        {/* topup routes */}
        <Route exact path="/topup" component={Topup} />
        {/* end of topup routes */}

        {/* confirm route */}
        <Route exact path="/topup/confirm" component={ConfirmPage} />
        {/* end of confirm routes */}


        {/* passcode route */}
        <Route exact path="/:service/enter-passcode" component={Passcode} />
        {/* end of passcode routes */}

        {/* success route */}
        <Route exact path="/:service/success" component={SuccessPage} />
        {/* end of success routes */}

        <Route component={NotFound} />

      </Switch>
  </Router>
  );
}

export default App;
