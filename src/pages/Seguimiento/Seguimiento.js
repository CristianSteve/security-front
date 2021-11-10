import React, { useState } from "react";

/* import ContextSocket from "../../Hooks/context-socket"; */
/* import useSocket from "../../Hooks/useSocket"; */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useComponent } from "../../Hooks/useComponent";

import "./seguimiento.scss";
import ListItem from "../../components/ListItem";

const Seguimiento = () => {
/*   const { content : {socketIO} } = useContext(ContextSocket); */
  /* const [emitServo] = useSocket(socketIO); */
  const [popInfo, setPopInfo] = useState(false);

  const { data, loading, error, updateComponent } = useComponent();

  const handleChangeCheck = (item) => {
    console.log(item.id)
    //console.log(flag, id)
    updateComponent(item);
    //emitServo(flag ? "C" : "A");
    setPopInfo(true);
    setTimeout(function () {
      setPopInfo(false);
    }, 2000);
  };

  return (
    <div className="seg__primary">
      <h2>Estado de la zona privada</h2>
      <hr />
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
            {!loading && !error && data &&
              data.map((c) => (
                <ListItem key={c.id} item={c} handleCheck={handleChangeCheck} />
              ))}
          </ol>
          <div className="seg__content__list__plano">
            <img src="https://i.ibb.co/CncdWD8/Plano3d.png" alt="plano" />
          </div>
        </div>
      </div>
      {popInfo && (
        <div className="">
          <div
            className="alert alert-success d-flex align-items-center col-4 position-absolute bottom-0 end-0"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Accion enviada correctamente</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seguimiento;
