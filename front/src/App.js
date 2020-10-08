import React from "react";
import Navbar from "./Components/navbar/navbar";
import Accueil from "./Components/accueil/accueil";
import Vehicules from "./Components/vehicules/vehicules";
import Contact from "./Components/contact/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Router>
        <Navbar />
        <Route exact path="/" component={Accueil} />
        <Route path="/vehicules" component={Vehicules} />
        <Route path="/contact" component={Contact} />
      </Router>
      {/* <Card /> */}
    </div>
  );
};

export default App;
