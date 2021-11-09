import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import loginWoman from "./images/securityOn.svg";
import maleAvatar from "./images/male_avatar.svg";

import { Link } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";
import { useForm } from "../../Hooks/useForm";
import { Input } from "../../components/Input";

import "./login.css";

export const Login = () => {

  const { login } = useAuth();

  const { loadingUser, errorUser, dataUser, createToken } = useUser();
  const [ values , handleInputChange ] = useForm({username: "", password: ""});
  const { username , password } = values;
  const [ hide, setHide ] = useState(false);

  const handleSubmitLogin = (e) =>{
    e.preventDefault();
    setHide(false);
    createToken(username, password);
  }

  useEffect(() => {
    if(!loadingUser && dataUser){
      login(dataUser);
    }
  }, [dataUser, loadingUser, login])

  return (
    <div className="container container__login">
      <div className="portada">
        <img src={loginWoman} alt="login" />
      </div>
      <form className="form" onSubmit={handleSubmitLogin}>
        <div className="form-group header-img">
          <img src={maleAvatar} alt="avatar" />
          <span>Bienvenido</span>
        </div>
        <div className="form-group">
          <Input placeholder="Username" nameComponent="username" value={username} handleChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <Input placeholder="Contraseña" nameComponent="password" type="password" value={password} handleChange={handleInputChange}/>
        </div>
        { !loadingUser && errorUser && !hide &&
        <div className="alert alert-danger alert-dismissible" role="alert">
          Usuario o contraseña no validos
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setHide(true)}}></button>
        </div>
        }
        <div className="form-group fm-btn mt-4">
          <button className="btn btn-primary">LOGIN</button>
        </div>
        <div className="text-center pt-4">No estas registrado? <Link className="text-link" to="/signup" >SignUp</Link></div>
      </form>
    </div>
  );
};
