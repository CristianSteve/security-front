import React from "react";
import { InputFloating } from "../../components/Input";
import { useForm } from "../../Hooks/useForm";
import { useUser } from "../../Hooks/useUser";

const Administrador = () => {
  const [ values, handleInputChange ] = useForm({ emailNew: "" });
  const { setCodeUser} = useUser();
  const { emailNew } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!emailNew)
        return;
    setCodeUser(emailNew);
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
            <div className="app-card-body">
              <form className="settings-form" onSubmit={handleSubmit}>
                <InputFloating
                  placeholder="Email"
                  value={emailNew}
                  nameComponent="emailNew"
                  handleChange={handleInputChange}
                />
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
    </div>
  );
};

export default Administrador;
