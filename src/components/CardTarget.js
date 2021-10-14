import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CardTarget = ({ label, cant, color, ftColor, link = "", icon }) => {
  const Card = styled.div`
    background: ${color};
    width: 235px;
    border-radius: 5px;
    position: relative;
    color: #fff;
    text-align: center;

    .ui-second {
      position: absolute;
      top: -25px;
      left: calc(100% - 60%);
      background: ${ftColor};
      width: 3rem;
      height: 3rem;
      border-radius: 100px;
      display: grid;
      justify-items: center;
      align-items: center;
      border: 0.1rem solid #fff;
    }
  `;

  const CardTemplate = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 0.5fr;

    .card__body {
      margin: 20px 10px;
      display: grid;
      align-content: center;

      p {
        margin: 1rem;
        font-weight: bold;
      }
    }
  `;

  const Footer = styled.div`
    background: ${ftColor};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;

    a {
      color: #fff;
    }
  `;
  return (
    <Card>
      <CardTemplate>
        <div className="card__body">
          <p>{label}</p>
          {cant !== "" && <span>{cant}</span>}
        </div>
        <Footer>
          <Link to={link}> Mas información </Link>
        </Footer>
      </CardTemplate>
      <div className="ui-second">
        <FontAwesomeIcon icon={icon} />
      </div>
    </Card>
  );
};

export default CardTarget;
