import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Input = ({
  icon = null,
  nameComponent,
  placeholder = "",
  value = "",
  type = "text",
  handleChange = () => {},
}) => {
  return (
    <div className="input-group mb-3">
      {icon && (
        <span className="input-group-text" id={nameComponent}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <input
        type={type}
        name={nameComponent}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export const InputFloating = ({
  nameComponent,
  placeholder = "",
  value = "",
  type = "text",
  isInvalid = false,
  handleChange = () => {},
}) => {
  return (
    <div className="form-floating">
     <input
        type={type}
        placeholder={placeholder}
        name={nameComponent}
        className={`form-control ${isInvalid && "is-invalid"}`}
        value={value}
        onChange={handleChange}
      />
      <label>{placeholder}</label>
    </div>
  );
};

export const InputSelect = ({
  listOption = [],
  nameComponent,
  placeholder = "",
  value = "",
  handleChange = () => {},
}) => {
  return (
    <div className="col-sm-3">
      <label className="visually-hidden" htmlFor="specificSizeSelect">
        {placeholder}
      </label>
      <select
        className="form-select"
        name={nameComponent}
        value={value}
        onChange={handleChange}
      >
        <option selected>Seleccionar</option>
        {listOption.map((list) => (
          <option value={list.id}>{list.item}</option>
        ))}
      </select>
    </div>
  );
};
