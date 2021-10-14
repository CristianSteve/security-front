import React from "react";
import CardTarget from "../../components/CardTarget";  
import { faArrowDown, faHistory, faDoorOpen, faWindowRestore } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Access = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Status = () => {
  return (
    <div>
      <Access>
        <CardTarget label="Puertas" cant="6" color="#6c63ff" ftColor="#4e48b5" icon={faDoorOpen}/>
        <CardTarget label="Ventanas" cant="9" color="#ff6380" ftColor="#c14c61" icon={faWindowRestore}/>
        <CardTarget label="Sensores" cant="3" color="#4ca6c1" ftColor="#40879d" icon={faArrowDown}/>
        <CardTarget label="Historico" cant="" color="#e98c60" ftColor="#bf6d46" icon={faHistory} link="/history"/>
      </Access>
    </div>
  );
};

export default Status;
