import React from "react";
import "./App.css";
import { Login, SignUp } from "./container";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppContainerWithErrorBoundary from "hoc";
const LoginContainer = AppContainerWithErrorBoundary(Login);
const SignUpContainer = AppContainerWithErrorBoundary(SignUp);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
      </Switch>
    </Router>
  );
}



export default App;
