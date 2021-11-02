import React, { useContext, useState } from "react";

import ContextSocket from "../../Hooks/context-socket";
import useSocket from "../../Hooks/useSocket";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./seguimiento.scss";

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #161526;
  color: #fff;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid #fff;
`;

const Label = styled.div`
  span {
    color: green;
    margin-right: 1rem;
  }
`;

const Switch = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;

  .switch-button {
    background: rgba(255, 255, 255, 0.56);
    border-radius: 30px;
    overflow: hidden;
    width: 100px;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-right: 50px;

    &:before {
      content: "Online";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
      color: #fff;
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      color: #fff;

      &:checked + .switch-button-label:before {
        transform: translateX(50px);
        transition: transform 300ms linear;
        background: green;
      }

      & + .switch-button-label {
        position: relative;
        padding: 5px 0;
        display: block;
        user-select: none;
        pointer-events: none;
        

        &:before {
          content: "";
          background: #fff;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
          background: red;
        }
        .switch-button-label-span {
          position: relative;
          color: #fff;
        }
      }
    }
  }
`;

const Seguimiento = () => {

  const { Socket } = useContext(ContextSocket);
  const [ emitServo ] = useSocket(Socket);
  const [pop, setPop] = useState(false);


  const handleChangeCheck = (flag) => {
    emitServo((flag.target.checked)?"C":"A");
    setPop(true);
    setTimeout(function(){
      setPop(false);
    }, 2000);
  }


  return (
    <div className="seg__primary">
      <h2>Estado de la zona privada</h2>
      <hr />
      <div className="seg__content">
        <div className="seg__content__status">
          <p>
            <span style={{color: "green"}}><FontAwesomeIcon icon={faCheck} /></span>
            Estado actual: <span>Protegido</span>
          </p>
        </div>
        <p>
          A continuación, encontrara un listado de los componentes instalos en
          su area privada.
        </p>
        <div className="seg__content__list">
          <ol>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Puerta principal
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" onChange={handleChangeCheck}/>
                  <label className="switch-button-label">
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Puerta Balcon
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" onChange={handleChangeCheck}/>
                  <label className="switch-button-label" >
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Puerta Terraza
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" />
                  <label className="switch-button-label" >
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Puerta Garage Auto
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" />
                  <label className="switch-button-label" >
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Ventana Sala
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" />
                  <label className="switch-button-label" >
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
            <List>
              <Label>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Sensor Ventana Zona de Juegos
              </Label>
              <Switch>
                <div className="switch-button">
                  <input className="switch-button-checkbox" type="checkbox" />
                  <label className="switch-button-label" >
                    <span className="switch-button-label-span">Offline</span>
                  </label>
                </div>
              </Switch>
            </List>
          </ol>
          <div className="seg__content__list__plano">
            <img src="https://i.ibb.co/CncdWD8/Plano3d.png" alt="plano" />
          </div>
        </div>
      </div>
      { pop && 
        <div className="">
          <div className="alert alert-success d-flex align-items-center col-4 position-absolute bottom-0 end-0" role="alert">
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

export default Seguimiento;
