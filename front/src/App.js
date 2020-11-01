import React from "react";
import Accueil from "./Components/accueil/accueil";
import Contact from "./Components/contact/contact";
import Login from "./Components/login/login";
import Navbar from "./Components/navbar/navbar";
import Vehicules from "./Components/vehicules/vehicules";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Router>
        <Navbar />
        <Route exact path="/" component={Accueil} />
        <Route path="/vehicules" component={Vehicules} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
};

export default App;
