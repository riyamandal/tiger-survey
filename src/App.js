import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateSurvey from "./CreateSurvey";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/createSurvey" exact component={CreateSurvey} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
