import React from "react";

const Settings = () => {
  return (
    <div className="container">
      <h1 className="app-page-title">Configuraciones</h1>
      <hr className="mb-4 mt-3 mb-2" />
      <div className="row g-4 settings-section">
        <div className="col-12 col-md-4">
          <h3 className="section-title">Notificaciones</h3>
          <div className="section-intro mt-2">
            Medio para el envío de las alertas.
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div class="app-card-body">
              <form class="settings-form" onSubmit={(e)=>e.preventDefault()}>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="settings-checkbox-1"
                  />
                  <label class="form-check-label" for="settings-checkbox-1">
                    Correo electronico
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-2"
                  />
                  <label class="form-check-label" for="settings-switch-2">
                    WhatsApp (Facebook)
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-3"
                  />
                  <label class="form-check-label" for="settings-switch-3">
                    Push Web
                  </label>
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-primary">
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
          <h3 className="section-title">Alertas</h3>
          <div className="section-intro mt-2">
            Esta sección podrás habilitar el envío de los eventos
            sucedidos en tu aplicación o área privada.
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">
            <div class="app-card-body">
              <form class="settings-form" onSubmit={(e)=>e.preventDefault()}>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-1"
                  />
                  <label class="form-check-label" for="settings-switch-1">
                    Modificar estado componente
                  </label>
                </div>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-2"
                  />
                  <label class="form-check-label" for="settings-switch-2">
                    Aperturar componente
                  </label>
                </div>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-3"
                  />
                  <label class="form-check-label" for="settings-switch-3">
                    Cerrar componente
                  </label>
                </div>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-4"
                  />
                  <label class="form-check-label" for="settings-switch-4">
                    Accesos no controlados
                  </label>
                </div>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="settings-switch-5"
                  />
                  <label class="form-check-label" for="settings-switch-5">
                    Modificar perfil
                  </label>
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Settings;
