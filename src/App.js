import React from 'react';
import Home from './Components/Home';
import Topup from './Components/Topup/Topup';
import News from './Components/News/News';
import ConfirmPage from './Components/Confirm/ConfirmPage';
import Passcode from './Components/Passcode/Passcode';
import SuccessPage from './Components/Success/SuccessPage';
import QrPage from './Components/Qr/QrPage';
import Testing from './Components/Testing';
import SendMoney from './Components/Send/SendMoney';
import NotFound from './Components/NotFound';
import TransactionHistoryPage from './Components/History/TransactionHistoryPage';
import './styles/style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";
import EnterAmount from './Components/Send/EnterAmount';


function App() {
  return (
    <div className="wrapper d-flex flex-column h-100">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          {/* topup routes */}
          <Route exact path="/topup" component={Topup} />

          {/* news routes */}
          <Route exact path="/news" component={News} />

          {/* news routes */}
          <Route exact path="/news/testing" component={Testing} />

          {/* Qr routes */}
          <Route exact path="/my-qr" component={QrPage} />

          {/* Send Money routes */}
          <Route exact path="/send" component={SendMoney} />
          <Route exact path="/send/enter-amount" component={EnterAmount} />


          {/* history route */}
          <Route exact path="/history" component={TransactionHistoryPage} />

          {/* confirm route */}
          <Route exact path="/:service/confirm" component={ConfirmPage} />

          {/* passcode route */}
          <Route exact path="/:service/enter-passcode" component={Passcode} />

          {/* success route */}
          <Route exact path="/:service/success" component={SuccessPage} />


          <Route component={NotFound} />

        </Switch>
    </Router>
  </div>
  );
}

export default App;
