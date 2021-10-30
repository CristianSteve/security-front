import React, { useContext } from "react";

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


  const handleChangeCheck = (flag) => {
    emitServo((flag.target.checked)?"C":"A");
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
            <img src="https://e7.pngegg.com/pngimages/658/432/png-clipart-apartment-house-3d-floor-plan-the-flats-at-wsu-best-layout-design-building-apartment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;
