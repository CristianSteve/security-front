import React from "react";

import "./historico.scss";

const Historico = () => {
  return (
    <div className="cont__history">
      <h2>Historico de alertas</h2>
      <hr />
      <form>
        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">
            @
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
              <th scope="col">Componente</th>
              <th scope="col">Hora</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sensor Puerta principal</td>
              <td>10:12 05:30:29</td>
              <td>Apertura inesperada de la ventana</td>
            </tr>
            <tr>
            <th scope="row">1</th>
              <td>Sensor Puerta principal</td>
              <td>10:12 05:30:29</td>
              <td>Apertura inesperada de la ventana</td>
            </tr>
            <tr>
            <th scope="row">1</th>
              <td>Sensor Puerta principal</td>
              <td>10:12 05:30:29</td>
              <td>Apertura inesperada de la ventana</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historico;
