import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
/* import ContextSocket from "./../Hooks/context-socket"; */

export const RoutePublic = ({ component: Component, ...rest }) => {
  const { isLogged } = useAuth();

  return (
    <Route {...rest}>{!isLogged() ? <Component /> : <Redirect to="/dashboard" />}</Route>
  );
};
