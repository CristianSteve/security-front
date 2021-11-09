import RouteAPP from "./routers/RouteApp";
import AuthProvider from "./Auth/AuthProvider";


import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouteAPP />
      </AuthProvider>
    </div>
  );
}

export default App;
