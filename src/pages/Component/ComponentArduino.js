import React from "react";
import {Input} from "../../components/Input";
import { useForm } from "../../Hooks/useForm";


const ComponentArduino = () => {
    const [values, handleInputChange] = useForm({nombre : "", componente : "", tipo : "", estado : ""});
    const {nombre, componente, tipo, estado} = values;
    const handleSubmitComponent = (e) => {
        e.preventDefault();
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmitComponent}>
            <Input placeholder="Nombre Componente" nameComponent="nombre" value={nombre} handleChange={handleInputChange}/>
            <Input placeholder="Componente" nameComponent="componente" value={componente} handleChange={handleInputChange}/>
            <Input placeholder="Tipo" nameComponent="tipo" value={tipo} handleChange={handleInputChange}/>
            <Input placeholder="Estado" nameComponent="estado" value={estado} handleChange={handleInputChange}/>
        </form>
    </div>
  );
};

export default ComponentArduino;
