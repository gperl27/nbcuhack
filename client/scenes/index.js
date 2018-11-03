import React from "react";
import { Route, Switch } from "react-router-dom";
import Lobby from "./Lobby";

const App = () => (
  <Switch>
    <Route exact path="/" component={Lobby} />
  </Switch>
);

export default App;
