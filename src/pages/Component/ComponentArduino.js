import React, { useEffect, useState } from "react";
import { InputFloating, InputSelect} from "../../components/Input";
import { useForm } from "../../Hooks/useForm";
import { useTypeComponent } from "../../Hooks/useTypeComponent";
import { useComponent } from "../../Hooks/useComponent";
import imageNewCompo from "./newComponent.svg";
import style from "styled-components";
import { ModalAlert } from "../../components/ModalAlert";
import Notification from "../../components/Notification";

const Image = style.img`
    display: flex;
    width : 80%;
    justify-self: center;
`

const Grid = style.div`
    display: flex;
    justify-items: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: 100%;
    form{
      width: 50vw;
    }

    @media (max-width: 750px) {
      
      form{
        width: 100%;
      }
      > div{
        display:none;
      }
    }
`

const ComponentArduino = () => {
  const [values, handleInputChange] = useForm({nombre : "", entrada : "", descripcion : "", Tipo_idComponente : "", icon : "", status : true});
  const {nombre, descripcion, Tipo_idComponente, icon, entrada} = values;
  const {dataType, loadingType, isErrorType} = useTypeComponent();
  const { data, isError, createComponent } = useComponent();
  const [isAlert, setIsAlert] = useState({isAccept : false, show : false, message : null});
  const [notification, setNotification] = useState({activeNoti : false, msgNoti : null, type : ""});

  const handleSubmitComponent = (e) => {
      e.preventDefault();
      for(let input in values){
        if(values[input] === ''){
          setIsAlert({...isAlert, show : !isAlert.show, message : "Campos no informados...", primary : null}); 
          return
        }
      }
      setIsAlert({...isAlert, show : !isAlert.show, message : "Seguro que desea grabar", primary : "Guardar"});
  }

  useEffect(() => {
    if(isAlert?.isAccept){
      createComponent(values);
    }
  }, [isAlert, values, createComponent])

  useEffect(() => { 
    if(isError)
      setNotification({activeNoti : true, msgNoti : isError, type: "error"})
    if(data){
      setNotification({activeNoti : true, msgNoti : "Accion enviada correctamente"}) 
    }
  }, [isError, data])

  return (
    <div className="container d-flex align-self-center" style={{height: "100%"}}>
      <ModalAlert show={isAlert.show} onHide={({isAccept}) => setIsAlert({show : !isAlert.show, isAccept})} msgPrimary={isAlert.primary} messageError={isAlert.message} />
      <Grid>
        <form onSubmit={handleSubmitComponent}>
            {!loadingType && dataType && !isErrorType &&
            <InputSelect placeholder="Tipo Componente" nameComponent="Tipo_idComponente" value={Tipo_idComponente} handleChange={handleInputChange} listOption={dataType}/>
            }
            <InputFloating placeholder="Numero del Input/OSutput Digital" nameComponent="entrada" value={entrada} handleChange={handleInputChange} type="number"/>
            <InputFloating placeholder="Icono" nameComponent="icon" value={icon} handleChange={handleInputChange}/>
            <InputFloating placeholder="Nombre Componente" nameComponent="nombre" value={nombre} handleChange={handleInputChange}/>
            <InputFloating placeholder="Descripción" nameComponent="descripcion" value={descripcion} handleChange={handleInputChange}/>
            <button className="btn btn-success mt-5 px-5 py-2" type="submit">Crear</button>
        </form>
        <div>
          <Image src={imageNewCompo} alt="Nuevo componente"/>
        </div> 
      </Grid>
      <Notification type={notification.type} message={notification.msgNoti} onHide={ () => setNotification({...notification, activeNoti : false})} show={notification.activeNoti}/>
    </div>
  );
};

export default ComponentArduino;
