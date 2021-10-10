import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { MenuDash } from "../components/MenuDash/MenuDash";
import Historico from "./Historico/Historico";
import Seguimiento from "./Seguimiento/Seguimiento";
import Status from "./Status/Status";


export const DashBoard = () => {
  return (
    <BrowserRouter>
      <MenuDash >
        <Switch>
          <Route exact path="/status" component={Status} />
          <Route exact path="/seguimiento" component={Seguimiento} />
          <Route exact path="/history" component={Historico} />

{/*        <Route exact path="/marca" component={GetMarca} />
          <Route exact path="/stock" component={Stock} />
          <Route exact path="/producto" component={Producto} />
          <Route exact path="/mensajes" component={Stock} />
          <Route exact path="/categorias" component={Categoria} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/pendientes" component={Pendientes} />
          <Route exact path="/ventas" component={Venta} /> */}
        </Switch>
      </MenuDash>
    </BrowserRouter>
  );
};
