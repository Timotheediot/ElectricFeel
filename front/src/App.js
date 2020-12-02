import React from "react";
import Accueil from "./Components/accueil/accueil";
import Favoris from "./Components/favoris/favoris";
import Footer from "./Components/footer/footer";
import Login from "./Components/login/login";
import Register from "./Components/login/register";
import Form from "./Components/form/form";
import Navbar from "./Components/navbar/navbar";
import Vehicules from "./Components/vehicules/vehicules";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-900 content h-full">
      <Router>
        <Navbar />
        <Route exact path="/" component={Form} />
        <Route path="/vehicules" component={Vehicules} />
        <Route path="/contact" component={Favoris} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
