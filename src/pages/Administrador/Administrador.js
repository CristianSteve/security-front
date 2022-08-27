import React, {useEffect, useState} from "react";
import { useArea } from "../../Hooks/useArea";
import { useCode } from "../../Hooks/useCode";
import { useForm } from "../../Hooks/useForm";
import { useUser } from "../../Hooks/useUser";
import { InputFloating, InputSelect } from "../../components/Input";

import Notification from "../../components/Notification";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './administrador.scss';

const Administrador = () => {
  const [ values, handleInputChange, ,resetInput ] = useForm({ area : "", emailReceptor: "" });
  const { setCodeUser} = useCode();
  const { area, emailReceptor } = values;
  const { dataArea, loadingArea } = useArea()
  const [notificacion, setNotificacion] = useState({});
  const {type, message, show} = notificacion;
  const { dataUser, loadingUser, errorUser, listUsers} = useUser();

  useEffect(() => {
    console.log("llamando listador users")
    listUsers();
  }, [listUsers])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!emailReceptor || !area){
      setNotificacion({message : "Lo sentimos, opciones no diligenciadas", type : "warning", show : true})
      return;
    }
    setCodeUser(values);
    resetInput();
    setNotificacion({message : "Correo electrónico enviado correctamente", type : "success", show : true})
  };

  return (
    <div className="container">
      <h1 className="page-title">Administrador</h1>
      <hr className="mb-4 mt-3" />
      <div className="row g-4 settings-section">
        <div className="col-12 col-md-4">
          <h3 className="section-title">Areas</h3>
          <div className="section-intro mt-2">Enviar token a usuario para crear cuenta en una area privada.</div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div className="app-card-body mt-4">
              <form className="settings-form" onSubmit={handleSubmit}>
                {!loadingArea && dataArea &&
                <InputSelect
                  listOption={dataArea}
                  valueDefault="Area"
                  value={area}
                  nameComponent="area"
                  handleChange={handleInputChange}
                />
                }
                <div className="app-card-body">
                  <InputFloating
                    placeholder="Email"
                    value={emailReceptor}
                    nameComponent="emailReceptor"
                    handleChange={handleInputChange}
                  />
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*<p>Falta listar usuarios(asignar permisos), crear areas </p>*/}
      </div>
      <div className="row g-4 settings-section mt-3">
        <div className="col-12">
          <h3 className="section-title">Usuarios</h3>
          <div className="section-intro mt-2">Muestra datos basicos de los Usuarios creados en el sistema.</div>
        </div>
        <div className="col-12">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div className="app-card-body mt-4">
            <div className="container mt-5 app-table">
                <div className="app-header">
                  <div className="app-icon">
                    <FontAwesomeIcon icon={faUserFriends} />
                  </div>
                  <h4 className="app-title">Listador</h4>
                </div>
                <div className="app-table-list table-responsive">
                <table className="table table-hover">
                  <thead className="app-table-list-header">
                    <tr>
                      <th scope="col">Usuario</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Celular</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Màs</th>
                    </tr>
                  </thead>
                  <tbody className="app-table-list-body">
                  {!loadingUser && !errorUser && dataUser && (
                    <>
                    {dataUser.map((h) => (
                      <tr key={h.id}>
                        <td data-label="Usuario">{h.username}</td>
                        <td data-label="Nombre">{h.nombre}</td>
                        <td data-label="Celular">{h.celular}</td>
                        <td data-label="Correo">{h.email}</td>
                        <td data-label="Estado">{h.status?'Activo':'Inactivo'}</td>
                        <td data-label="más">mas</td>
                      </tr>
                    ))}
                    </>
                  )}
                  </tbody>
                </table>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Notification type={type} message={message} show={show} 
        onHide={ () => setNotificacion({...notificacion, show : false})}
      />
    </div>
  );
};

export default Administrador;
