import React, { useContext } from "react";
import { faDoorOpen, faWindowMaximize, faPlus } from "@fortawesome/free-solid-svg-icons";

import ContextSocket from "../../Hooks/context-socket";
import useSocket from "../../Hooks/useSocket";

import "./control.scss";
import CardComponent from "../../components/CardComponent";

const Control = () => {

  const { Socket } = useContext(ContextSocket);
  const [ emitServo ] = useSocket(Socket);


  const handleChangeCheck = (flag) => {
    emitServo((flag.target.checked)?"C":"A");
  }

  return (
    <div className="cont__control">
      <h2>Control de Componentes</h2>
      <hr />
      <div className="content__card">
        <CardComponent nameComponent="Puerta Balcon" created="2021-01-01" statusComponent={true} iconComponent={faDoorOpen} eventClick={handleChangeCheck}/>
        <CardComponent nameComponent="Vetana Alcoba" created="2021-01-01" statusComponent={true} iconComponent={faWindowMaximize} eventClick={handleChangeCheck}/>
        <CardComponent nameComponent="Puerta Pricipal" created="2021-01-01" statusComponent={false} iconComponent={faDoorOpen} eventClick={handleChangeCheck}/>
        <CardComponent nameComponent="Nuevo Componente" iconComponent={faPlus} newComponent={true} eventClick={handleChangeCheck}/>
      </div>
    </div>
  );
};

export default Control;
