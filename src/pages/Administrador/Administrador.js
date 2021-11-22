import React, {useState} from "react";
import { InputFloating, InputSelect } from "../../components/Input";
import Notification from "../../components/Notification";
import { useArea } from "../../Hooks/useArea";
import { useCode } from "../../Hooks/useCode";
import { useForm } from "../../Hooks/useForm";

const Administrador = () => {
  const [ values, handleInputChange, ,resetInput ] = useForm({ area : "", emailReceptor: "" });
  const { setCodeUser} = useCode();
  const { area, emailReceptor } = values;
  const { dataArea, loadingArea } = useArea()
  const [notificacion, setNotificacion] = useState({});
  const {type, message, show} = notificacion;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!emailReceptor || !area)
    return;
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
          <h3 className="section-title">Usuarios</h3>
          <div className="section-intro mt-2">Enviar código para crear cuenta en el area privada.</div>
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
      </div>
      <Notification type={type} message={message} show={show} 
        onHide={ () => setNotificacion({...notificacion, show : false})}
      />
    </div>
  );
};

export default Administrador;
