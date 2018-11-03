import React from "react";
import { Route, Switch } from "react-router-dom";
import Lobby from "./Lobby";
import Answer from "./Answer";

const App = () => (
  <Switch>
    <Route exact path="/" component={Lobby} />
    <Route exact path="/answers" component={Answer} />
  </Switch>
);

export default App;
