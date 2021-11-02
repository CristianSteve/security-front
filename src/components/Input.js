import React from "react";

const Input = ({ icon = null, nameComponent, placeholder = "", value = "", handleChange = ()=>{}}) => {
  return (
    <div className="input-group mb-3">
      {icon && (
        <span className="input-group-text" id={nameComponent}>
          @
        </span>
      )}
      <input type="text" name={nameComponent} className="form-control" placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  );
};

export default Input;
