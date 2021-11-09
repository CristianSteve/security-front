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
    <div className="form-floating mt-3">
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
    <div className="col-sm-3 mb-3">
      <label className={`${!placeholder && "visually-hidden"}`}>
        {placeholder}
      </label>
      <select
        className="form-select"
        name={nameComponent}
        value={value}
        onChange={handleChange}
      >
        <option defaultValue>Seleccionar</option>
        {listOption.map((list) => (
          <option key={list.id} value={list.id}>{list.nombre}</option>
        ))}
      </select>
    </div>
  );
};

export const CheckBox = ({
  nameComponent = "",
  placeholder = "",
  tSwitch = false,
  defChecked = false,
  handleChange = () => {}}) =>{
  return (
    <div className={`form-check ${tSwitch && "form-switch"} mb-3`}>
    <input
      className="form-check-input"
      type="checkbox"
      name={nameComponent}
      onChange={handleChange}
      defaultChecked={defChecked}
    />
    <label className="form-check-label">
      {placeholder}
    </label>
  </div>
  )
}
