import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound.js/NotFound";
import { DashBoard } from "../pages/DashBoard";
import Home from "../pages/Login/home/Home";

function RouteAdmin() {
  return (
    <Router>
      <div>
{/*         <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={DashBoard} />

          <Route component={NotFound} />
        </Switch>
       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default RouteAdmin;
