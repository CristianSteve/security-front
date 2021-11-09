import React from "react";
import {InputFloating, InputSelect} from "../../components/Input";
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
            <InputSelect nameComponent="tipo" value={tipo} handleChange={handleInputChange}/>
            <InputFloating placeholder="Nombre Componente" nameComponent="nombre" value={nombre} handleChange={handleInputChange}/>
            <InputFloating placeholder="Componente" nameComponent="componente" value={componente} handleChange={handleInputChange}/>
            <InputFloating placeholder="Estado" nameComponent="estado" value={estado} handleChange={handleInputChange}/>
            <button className="btn btn-success mt-5 px-5 py-2" type="submit">Crear</button>
        </form>
    </div>
  );
};

export default ComponentArduino;
