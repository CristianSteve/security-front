import React from "react";
import { Input, InputSelect } from "../../components/Input";
import { useForm } from "../../Hooks/useForm";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./historico.scss";

const Historico = () => {
  const [values, handleInputChange] = useForm({ calendar: "", component: "" });
  const { calendar, component } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("buscando");
  };

  return (
    <div className="cont__history">
      <h2>Historico de alertas</h2>
      <hr />
      <form className="row g-3 mt-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <Input
            icon={faCalendar}
            type="date"
            placeholder="calendar"
            nameComponent="calendar"
            value={calendar}
            handleChange={handleInputChange}
          />
        </div>
        <InputSelect
          listOption={[{ id: 1, item: "Puerta" }, {id : 2, item : "Ventana"}]}
          nameComponent="component"
          placeholder="Componente"
          value={component}
          handleChange={handleInputChange}
        />
        <div class="col-auto">
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <div className="mt-5">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Componente / Sensor</th>
              <th scope="col">Hora</th>
              <th scope="col">Usuario</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Puerta principal</td>
              <td>10:12 - 05:30:29</td>
              <td>Cristian Steve</td>
              <td>Apertura inesperada desde el exterior</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Puerta Balcon</td>
              <td>14:12 - 05:10:45</td>
              <td>Cristian Steve</td>
              <td>Cierre de puerta por aplicativo web</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ventana Sala</td>
              <td>18:10 - 01:35:19</td>
              <td>Cristian Steve</td>
              <td>Se inactiva sensor por Leidy</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Ventana Sala</td>
              <td>18:12 - 03:33:07</td>
              <td>Cristian Steve</td>
              <td>Se Activa sensor por Administrador</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historico;
