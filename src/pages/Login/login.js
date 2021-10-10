import React from "react";
import { Link } from "react-router-dom";
import loginWoman from "./images/securityOn.svg";
import maleAvatar from "./images/male_avatar.svg";

import "./login.css";

export const login = () => {
  return (
    <div className="container container__login">
      <div className="portada">
        <img src={loginWoman} alt="login" />
      </div>
      <div className="form">
        <div className="form-group header-img">
          <img src={maleAvatar} alt="avatar" />
          <span>Bienvenido</span>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
            />
          </div>
        </div>
        <div className="form-group">
          <input placeholder="Contraseña" className="form-control" type="password" name="Pass" />
        </div>
        <div className="form-group fm-btn mt-3">
          <Link className="btn btn-primary" to="/dashboard">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};
