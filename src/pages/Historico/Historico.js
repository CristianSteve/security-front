import React from "react";

import "./historico.scss";

const Historico = () => {
  return (
    <div className="cont__history">
      <h2>Historico de alertas</h2>
      <hr />
      <form className="col-5">
        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">
            H
          </span>
          <input
            type="date"
            class="form-control"
            placeholder="calendar-check"
          />
        </div>
      </form>
      <div className="mt-5">
        <table class="table table-striped table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Componente / Sensor</th>
              <th scope="col">Hora</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Puerta principal</td>
              <td>10:12 - 05:30:29</td>
              <td>Apertura inesperada desde el exterior</td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td>Puerta Balcon</td>
              <td>14:12 - 05:10:45</td>
              <td>Cierre de puerta por aplicativo web</td>
            </tr>
            <tr>
            <th scope="row">3</th>
              <td>Ventana Sala</td>
              <td>18:10 - 01:35:19</td>
              <td>Se inactiva sensor por Leidy</td>
            </tr>
            <tr>
            <th scope="row">4</th>
              <td>Ventana Sala</td>
              <td>18:12 - 03:33:07</td>
              <td>Se Activa sensor por Administrador</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historico;
