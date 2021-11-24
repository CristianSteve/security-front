import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { MenuDash } from "../components/MenuDash/MenuDash";
import Control from "./Control/Control";
import Historico from "./Historico/Historico";
import Seguimiento from "./Seguimiento/Seguimiento";
import Status from "./Status/Status";
import ComponentArduino from "./Component/ComponentArduino";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import NotFound from "../components/NotFound/NotFound";
import { RoutePrivate } from "../routers/RoutePrivate";
import { ContextSocketProvider } from "../Hooks/context-socket";
import Administrador from "./Administrador/Administrador";
import Acceso from "./Acceso/Acceso";

export const DashBoard = () => {
  return (
    <BrowserRouter>
      <MenuDash>
        <ContextSocketProvider>
          <Switch>
            <RoutePrivate exact path="/administrador" component={Administrador} />
            <RoutePrivate exact path="/Accesos" component={Acceso} />
            <RoutePrivate exact path="/status" component={Status} />
            <RoutePrivate exact path="/seguimiento" component={Seguimiento} />
            <RoutePrivate exact path="/history" component={Historico} />
            <RoutePrivate exact path="/control" component={Control} />
            <RoutePrivate exact path="/setting" component={Settings} />
            <RoutePrivate exact path="/profile" component={Profile} />
            <RoutePrivate exact path="/sensor" component={ComponentArduino} />
            <RoutePrivate exact path="/dashboard" component={Status} />
            <Route component={NotFound}/>
          </Switch>
        </ContextSocketProvider>
      </MenuDash>
    </BrowserRouter>
  );
};
