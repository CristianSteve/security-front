import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "../../Hooks/useForm";


const Component = () => {
    const [show, setshow] = useState(false);
    const [values, handleInputChange] = useForm({nombre : "", componente : "", tipo : "", estado : ""});
    const {nombre, componente, tipo, estado} = values;
    const handleSubmitComponent = (e) => {
        e.preventDefault();
    }
  return (
    <div className="container">
      <PopUpEmpty show={show} hide={setshow} module={module}>
        <form onSubmit={handleSubmitComponent}>
            <Input placeholder="Nombre Componente" nameComponent="nombre" value={nombre} handleChange={handleInputChange}/>
            <Input placeholder="Componente" nameComponent="componente" value={componente} handleChange={handleInputChange}/>
            <Input placeholder="Tipo" nameComponent="tipo" value={tipo} handleChange={handleInputChange}/>
            <Input placeholder="Estado" nameComponent="estado" value={estado} handleChange={handleInputChange}/>
        </form>
      </PopUpEmpty>
    </div>
  );
};

export default Component;
