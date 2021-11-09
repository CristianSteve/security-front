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

  const [values, handleInputChange] = useForm({email: false, whatsapp: false, push: false, 
         ModCom : false, ApeCom: false, CerrCom: false, AccCon: false, ModPer: false});
  const { email, whatsapp, push,ModCom, ApeCom, CerrCom, AccCon, ModPer } = values;
  const [notify, alert] = subTitle;

  const { dataConf, loadingConf, listConfig, modifySettings } = useSettings();

  const {user} = useAuth()

  useEffect(() => {
    listConfig(user.id);
  }, [user.id]);

  const handleSubmitNotify = (e) =>{
    e.preventDefault();
    console.log({email, whatsapp, push})
    modifySettings(1);
  }

  const handleSubmitAlert = (e) =>{
    e.preventDefault();
    console.log({ModCom,
      ApeCom,
      CerrCom,
      AccCon,
      ModPer})
    modifySettings(1);
  }
  return (
    <div className="container">
      <h1 className="app-page-title">Configuraciones</h1>
      <hr className="mb-4 mt-3 mb-2" />
      <div className="row g-4 settings-section">
        <div className="col-12 col-md-4">
          <h3 className="section-title">{notify.title}</h3>
          <div className="section-intro mt-2">{notify.desc}</div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div className="app-card-body">
              <form className="settings-form" onSubmit={handleSubmitNotify}>
                {!loadingConf && dataConf && <>
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
              {!loadingConf && dataConf && <>
                <CheckBox placeholder="Modificar estado componente" defChecked={dataConf.estado} tSwitch={true} nameComponent="ModCom" handleChange={handleInputChange}/>
                <CheckBox placeholder="Aperturar componente" defChecked={dataConf.apertura} tSwitch={true} nameComponent="ApeCom" handleChange={handleInputChange}/>
                <CheckBox placeholder="Cerrar componente" defChecked={dataConf.cerrar} tSwitch={true} nameComponent="CerrCom" handleChange={handleInputChange}/>
                <CheckBox placeholder="Accesos no controlados" defChecked={dataConf.acceso} tSwitch={true} nameComponent="AccCon" handleChange={handleInputChange}/>
                <CheckBox placeholder="Modificar perfil" defChecked={dataConf.perfil} tSwitch={true} nameComponent="ModPer" handleChange={handleInputChange}/>
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
