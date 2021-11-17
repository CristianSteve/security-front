import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Card = styled.div`
  height: 260px;
  width: 210px;
  box-shadow: 1px 2px 5px #ccc;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 620px) {
    width: calc(45vw - 5.5rem)
  }

  @media (max-width: 500px) {
      width: 65vw;
      border-radius: 10px;
  }

`;

const Head = styled.div`
  background: #abe5a8;
  height: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 3rem;
`;

const Body = styled.div`
  height: 50%;
  font-size: 0.8rem;
  margin: 10px;
  p {
    text-align: center;
    font-size: 0.95rem;
    margin: 5px 0px;
  }
  p,
  span {
    font-weight: bold;
  }

  ol li {
    list-style: none;
  }
  .ult {
    display: flex;
    justify-content: end;
    padding-top: 10px;
  }
`;

const CardComponent = ({idComponent, nameComponent, created, statusComponent, iconComponent, newComponent=false, eventClick=()=>{}, eventComponent =()=>{}}) => {
  return (
    <Card>
      <Head onClick={eventComponent}>
        <FontAwesomeIcon icon={iconComponent} />
      </Head>
      <Body>
        <p>{nameComponent}</p>
        {!newComponent &&
        <ol>
          <li>
            <span>Creado : </span>{created}
          </li>
          <li>
            <span>Estado : </span>{statusComponent?"Activo":"Inactivo"}
          </li>
          <li className="ult">
            <span>Abrir/Cerrar </span>
            <div className="form-check form-switch ms-2">
              <input id={idComponent} className="form-check-input" type="checkbox" disabled={!statusComponent} onChange={eventClick} />
            </div>
          </li>
        </ol>
        }
      </Body>
    </Card>
  );
};

export default CardComponent;
