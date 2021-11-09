import React from "react";
import styled from "styled-components";

import NotFoundImg from "./notFound.svg";

const NotFounds = styled.div`
  img {
    height: 100vh;
  }

  div {
    position: absolute;
    top: 45%;
    right: 10%;
    text-align: center; 
  }
`;

const NotFound = () => {
  return (
    <NotFounds>
      <img src={NotFoundImg} alt="not found" />
      <div>
        <p>404</p>
        <span>Pagina no encontrada</span>
      </div>
    </NotFounds>
  );
};

export default NotFound;
