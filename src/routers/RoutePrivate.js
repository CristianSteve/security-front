import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

export const RoutePrivate = ({ component: Component, ...rest }) => {
  const { isLogged } = useAuth();

  return (
    <Route {...rest}>{isLogged() ? <Component /> : <Redirect to="/login" />}</Route>
  );
};
