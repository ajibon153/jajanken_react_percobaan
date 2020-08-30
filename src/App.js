import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Game from "./components/game";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/game" exact component={Game} />
      </Router>
    </div>
  );
};

export default App;
