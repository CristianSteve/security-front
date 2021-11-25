import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Input = ({
  icon = null,
  nameComponent,
  placeholder = "",
  value = "",
  type = "text",
  className = "",
  handleChange = () => {},
}) => {
  return (
    <div className={`input-group mb-3 ${className}`}>
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
        autoComplete="off"
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
  textError = "",
  handleChange = () => {},
}) => {
  return (
    <div className="form-floating mt-3 has-validation">
     <input
        type={type}
        placeholder={placeholder}
        name={nameComponent}
        className={`form-control ${isInvalid && "is-invalid"}`}
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      <label>{placeholder}</label>
      <div className="invalid-feedback px-2">
        {textError}
      </div>
    </div>
  );
};

export const InputSelect = ({
  listOption = [],
  nameComponent,
  placeholder = "",
  value = "",
  valueDefault = "Seleccionar",
  handleChange = () => {},
}) => {
  return (
    <div className="col-sm-4 mb-3">
      <label className={`${!placeholder && "visually-hidden"}`}>
        {placeholder}
      </label>
      <select
        className="form-select"
        name={nameComponent}
        value={value}
        onChange={handleChange}
      >
        <option defaultValue>{valueDefault}</option>
        { !!listOption &&
          listOption.map((list) => (
          <option key={list.id} value={list.id}>{list?.descripcion ? list.descripcion : list.nombre}</option>
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
