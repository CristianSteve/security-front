import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { DashBoard } from "../pages/DashBoard";
import { Login } from "../pages/Login/login";
import { RoutePrivate } from "./RoutePrivate";
import { RoutePublic } from "./RoutePublic";
import NotFound from "../components/NotFound/NotFound";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Login/home/Home";

const RouteAPP = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <RoutePublic exact path="/login" component={Login} />
          <RoutePublic exact path="/signup" component={SignUp} />
          <RoutePrivate path="/dashboard" component={DashBoard} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default RouteAPP;
