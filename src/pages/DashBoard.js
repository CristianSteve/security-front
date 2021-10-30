import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { MenuDash } from "../components/MenuDash/MenuDash";
import Control from "./Control/Control";
import Historico from "./Historico/Historico";
import Seguimiento from "./Seguimiento/Seguimiento";
import Status from "./Status/Status";
import {ContextSocketProvider} from "./../Hooks/context-socket";

export const DashBoard = () => {
  return (
    <BrowserRouter>
      <MenuDash>
        <ContextSocketProvider>
          <Switch>
            <Route exact path="/status" component={Status} />
            <Route exact path="/seguimiento" component={Seguimiento} />
            <Route exact path="/history" component={Historico} />
            <Route exact path="/control" component={Control} />
          </Switch>
        </ContextSocketProvider>
      </MenuDash>
    </BrowserRouter>
  );
};
