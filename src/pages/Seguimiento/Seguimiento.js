import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//import { useComponent } from "../../Hooks/useComponent";
import { useHistory } from "../../Hooks/useHistory";

import ListItem from "../../components/ListItem";
import "./seguimiento.scss";
import Notification from "../../components/Notification";
import { useAcceso } from "../../Hooks/useAcceso";

const Seguimiento = () => {
  const { response, createHistory } = useHistory();
/*   const { data, loading, error, updateComponent } = useComponent(); */
  const { dataAcceso, loadingAcceso, errorAcceso, updateAcceso } = useAcceso();
  const [notificacion, setNotificacion] = useState({});
  const {type, message, show} = notificacion;

  const handleChangeCheck = (item) => {
    const descripcion = item.status ? "Se habilito el componente" : "Se deshabilito el componente";
    const idAcceso = item.id;
    createHistory({descripcion, idAcceso});
    updateAcceso(item);
  };

  useEffect(() => {
    if(response?.dataH)
      setNotificacion({message : "Acción enviada corraaectamente", type : "success", show : true})
    if(response?.errorH)
      setNotificacion({message : "Ha ocurrido un error", type : "danger", show : true})
  }, [response])

  return (
    <div className="seg__primary">
      <h2>Estado de la zona privada</h2>
      <hr className="mb-5 mt-3 mb-2" />
      <div className="seg__content">
        <div className="seg__content__status">
          <p>
            <span style={{ color: "green" }}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Estado actual: <span>Protegido</span>
          </p>
        </div>
        <p>
          A continuación, encontrara un listado de los componentes instalos en
          su area privada.
        </p>
        <div className="seg__content__list">
          <ol>
            {!loadingAcceso && !errorAcceso && dataAcceso &&
              dataAcceso.map((c) => (
                <ListItem key={c.id} item={c} handleCheck={handleChangeCheck} />
              ))}
          </ol>
          <div className="seg__content__list__plano">
            <img src="https://i.ibb.co/CncdWD8/Plano3d.png" alt="plano" />
          </div>
        </div>
      </div>
      <Notification type={type} message={message} show={show} 
        onHide={ () => setNotificacion({...notificacion, show : false})}
      />
    </div>
  );
};

export default Seguimiento;
