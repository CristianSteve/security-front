import React, { useEffect } from "react";
import { CheckBox } from '../../components/Input'
import useAuth from "../../Hooks/useAuth";
import { useForm } from "../../Hooks/useForm";
import { useSettings } from "../../Hooks/useSettings";

const subTitle = [
  {title : "Notificaciones", desc : "Medio para el envío de las alertas."},
  {title : "Alertas", desc : "Esta sección podrás habilitar el envío de los eventos sucedidos en tu aplicación o área privada."},
]

const Settings = () => {

  const [values, handleInputChange, handlePushState] = useForm({email: false, whatsapp: false, push: false, 
         estado : false, apertura: false, cerrar: false, acceso: false, perfil: false});
  const { email, whatsapp, push, estado, apertura, cerrar, acceso, perfil } = values;
  const [notify, alert] = subTitle;

  const { dataConf, loadingConf, errorConf, listConfig, modifySettings, setDefaultValues } = useSettings();

  const {user} = useAuth()

  useEffect(() => {
    listConfig(user.id);
  }, [user.id, listConfig]);

  useEffect(() => {
    if(!!dataConf) handlePushState(dataConf);
  }, [dataConf, handlePushState])

  const handleSubmitNotify = (e) =>{
    e.preventDefault();
    setDefaultValues();
    modifySettings({...dataConf, email, whatsapp, push});
  }

  const handleSubmitAlert = (e) =>{
    e.preventDefault();
    setDefaultValues();
    modifySettings({...dataConf, estado, apertura, cerrar, acceso, perfil});
  }
  return (
    <div className="container">
      <h1 className="page-title">Configuraciones</h1>
      <hr className="mb-5 mt-3 mb-2" />
      <div className="row g-4 settings-section">
        <div className="col-12 col-md-4">
          <h3 className="section-title">{notify.title}</h3>
          <div className="section-intro mt-2">{notify.desc}</div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div className="app-card-body">
              <form className="settings-form" onSubmit={handleSubmitNotify}>
                {!loadingConf && !errorConf && dataConf && 
                <>
                  <CheckBox placeholder="Correo electronico" defChecked={dataConf.email} nameComponent="email" handleChange={handleInputChange}/>
                  <CheckBox placeholder="WhatsApp (Facebook)" defChecked={dataConf.whatsapp} nameComponent="whatsapp" handleChange={handleInputChange}/>
                  <CheckBox placeholder="Push Web" defChecked={dataConf.push} nameComponent="push" handleChange={handleInputChange}/>
                </>
                }
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row g-4 settings-section">
        <div className="col-12 col-md-4">
          <h3 className="section-title">{alert.title}</h3>
          <div className="section-intro mt-2">{alert.desc}</div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div className="app-card-body">
              <form className="settings-form" onSubmit={handleSubmitAlert}>
              {!loadingConf && !errorConf && dataConf && 
                <>
                  <CheckBox placeholder="Modificar estado componente" defChecked={dataConf.estado} tSwitch={true} nameComponent="estado" handleChange={handleInputChange}/>
                  <CheckBox placeholder="Aperturar componente" defChecked={dataConf.apertura} tSwitch={true} nameComponent="apertura" handleChange={handleInputChange}/>
                  <CheckBox placeholder="Cerrar componente" defChecked={dataConf.cerrar} tSwitch={true} nameComponent="cerrar" handleChange={handleInputChange}/>
                  <CheckBox placeholder="Accesos no controlados" defChecked={dataConf.acceso} tSwitch={true} nameComponent="acceso" handleChange={handleInputChange}/>
                  <CheckBox placeholder="Modificar perfil" defChecked={dataConf.perfil} tSwitch={true} nameComponent="perfil" handleChange={handleInputChange}/>
                </>}
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
