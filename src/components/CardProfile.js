import React, { useState } from "react";
import { Link as Button } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { Input } from "./Input";

const CardProfile = ({ attr, vlr, name, change, type, handleChangeVlr = () => {} }) => {
  const [enable, setEnable] = useState(false);
  const [values, handleInputChange] = useForm({data: vlr});
  const { data } = values;

  const handleChangeData = (e) => {
    e.preventDefault();
    if(enable) 
      if(data !== vlr) handleChangeVlr(name, data);
    setEnable(!enable);
  }

  return (
    <div className="item border-bottom pt-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-auto w-75">
          <div className="item-label">
            <strong>{attr}</strong>
          </div>
          <div className="item-data">
            <Input
              className="mb-2"
              disabled={!enable}
              nameComponent="data"
              value={data}
              handleChange={handleInputChange}
              type={type}
            />
          </div>
        </div>
        <div className="col text-end">
          {change &&
            <Button className={`btn-sm btn-${!enable ? "primary" : "success"}`} onClick={handleChangeData}>
              {!enable ? "Change" : "Guardar"}
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
