import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { login } from "../pages/Login/login";
import RouteAdmin from "./RouteAdmin";

const RouteAPP = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route path="/" component={RouteAdmin} />
        </Switch>
      </div>
    </Router>
  );
};

export default RouteAPP;
