import React from "react";
import styled from "styled-components";

import NotFoundImg from "./notFound.svg";

const NotFounds = styled.div`
  img {
    height: 100vh;
  }

  div {
    position: absolute;
    top: 10%;
    right: 10%;
    text-align: center; 

    & p:first-child{
      font-size: 2rem;
      font-weight: bold;
    }
  }

  @media screen and (max-width:600px){
    img{
      width:100%
    }

    div {
      position: sticky;
      width: 100%;
      bottom: 10%;
      right: 0%;
      text-align: center; 
      font-size: 2rem !important;
    }
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
