import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

import CardComponent from "../../components/CardComponent";
import PopUpEmpty from "../../components/PopUpEmpty/PopUpEmpty";

import ContextSocket from "../../Hooks/context-socket";
import useSocket from "../../Hooks/useSocket";

import { useHistory } from "../../Hooks/useHistory";
import { useAcceso } from "../../Hooks/useAcceso";

import { faPlus, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import ComponentArduino from "../Component/ComponentArduino";

import Aos from "aos";
import "aos/dist/aos.css";
import "./control.scss";
const ADMINISTRADOR = 'Administrador';

const message = {
  open : "Se ha generado una apertura desde el aplicativo web", 
  close : "Se ha realizado el cierre desde el aplicativo web"
}

const Control = () => {

  const { user } = useAuth();
  const { content : {socketIO} } = useContext(ContextSocket);
  const { dataAcceso, loadingAcceso, errorAcceso, updateAcceso } = useAcceso();
  const { createHistory } = useHistory();
  const [ emitServo ] = useSocket(socketIO);

  const [ pop, setPop ] = useState(false);
  const [ show, setshow ] = useState(false);

  const handleChangeCheck = (flag, data) => {
    const open = flag.target.checked;
    const idAcceso = flag.target.id;
    const descripcion = open ? message.open : message.close;

    updateAcceso({...data, action : open});
    createHistory({descripcion, idAcceso});
    emitServo(flag.target.id);
    setPop(true);
    setTimeout(function(){
      setPop(false);
    }, 2000);
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="cont__control">
      <h2>Control de los Accesos</h2>
      <hr className="mb-5 mt-3 mb-2" />
      {!loadingAcceso && !errorAcceso &&
        <div className="content__card" data-aos="fade-up">
          {dataAcceso.map((c) => (
            <CardComponent key={c.id} data={c} idComponent={c.id} action={c.action} nameComponent={c.descripcion} created={c.createdAt.substring(0,10)} statusComponent={c.status} iconComponent={faQuestionCircle} eventClick={handleChangeCheck}/>  
          ))}
          {user.tipo === ADMINISTRADOR &&
            <CardComponent nameComponent="Nuevo Componente" iconComponent={faPlus} newComponent={true} eventComponent={()=>{setshow(!show)}}/>
          }
        </div>
      }
      <PopUpEmpty show={show} hide={setshow}>
        <ComponentArduino />
      </PopUpEmpty>
      {pop &&
      <div>
        <div className="alert alert-primary d-flex align-items-center col-4 position-absolute bottom-0 end-0" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <div>
            Accion enviada correctamente
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Control;
