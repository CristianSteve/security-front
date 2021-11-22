import React, { useEffect, useState } from "react";
import { Input, InputSelect } from "../../components/Input";
import { useForm } from "../../Hooks/useForm";
import { faCalendar, faHistory, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "../../Hooks/useHistory";

import { useAcceso } from "../../Hooks/useAcceso";
import { ModalAlert } from "../../components/ModalAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./historico.scss";

const Historico = () => {
  const [ values, handleInputChange ] = useForm({ calendar: "", component: "" });
  const { calendar, component } = values;
  
  const [errorModal, setErrorModal] = useState({isError: false,message: ""});
  const { isError, message } = errorModal;

  const isErrorReset = () => setErrorModal({ isError: false, message: "" });
  const { response: { dataH, loadingH, errorH }, findHistory} = useHistory();
  const { dataAcceso, loadingAcceso, errorAcceso } = useAcceso();

  useEffect(() => {
    findHistory({});
  }, [findHistory]);

  useEffect(() => {
    if(errorH)
      setErrorModal({isError: true, message : errorH});
    if(errorAcceso)
      setErrorModal({isError: true, message : errorAcceso});
  }, [errorH, errorAcceso])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!calendar){
      setErrorModal({isError: true, message : "No se informo el calendario"});
      return
    }
    findHistory({date : calendar, type: component})
  };

  return (
    <div className="cont__history">
      <ModalAlert show={isError} onHide={() => isErrorReset()} messageError={message} />
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
        {!errorAcceso &&
          <InputSelect
            listOption={dataAcceso}
            nameComponent="component"
            value={component}
            handleChange={handleInputChange}
          />
        }
        <div className="col-auto">
          <button className="btn btn-primary app-send" type="submit"><FontAwesomeIcon icon={faSearch} /> Buscar</button>
        </div>
      </form>
      <div className="container mt-5 app-table">
          <div className="app-header">
            <div className="app-icon">
              <FontAwesomeIcon icon={faHistory} />
            </div>
            <h4 className="app-title">Registros</h4>
          </div>
          <div className="app-table-list table-responsive">
          <table className="table table-hover">
            <thead className="app-table-list-header">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Componente</th>
                <th scope="col">Fecha/Hora</th>
                <th scope="col">Usuario</th>
                <th scope="col">Descripción</th>
              </tr>
            </thead>
            <tbody className="app-table-list-body">
            {!loadingH && !errorH && !errorAcceso && !loadingAcceso && (
              <>
              {dataH.map((h) => (
                <tr key={h.id}>
                  <th scope="row">{h.id}</th>
                  {<td>{dataAcceso.find((i) => h.idAcceso === i.id).descripcion}</td>}
                  <td>{h.createdAt.substring(0,10)}</td>
                  <td>{h.usuario}</td>
                  <td>{h.descripcion}</td>
                </tr>
              ))}
              </>
            )}
            </tbody>
          </table>
          </div>
      </div>
    </div>
  );
};

export default Historico;
