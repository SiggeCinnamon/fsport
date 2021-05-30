import "./App.scss";
import React from "react";
import Routes from "./routes";
import Home from "./pages/home";
import Lobby from "./pages/lobby";
import Messages from "./pages/messages";
import Account from "./pages/account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.HOME} exact component={Home} />
        <Route path={Routes.LOBBY} exact component={Lobby} />
        <Route path={Routes.MESSAGES} exact component={Messages} />
        <Route path={Routes.ACCOUNT} exact component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
