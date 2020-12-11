import React, { useState, createContext } from "react";
import Favoris from "./Components/favoris/favoris";
import Footer from "./Components/footer/footer";
import Login from "./Components/login/login";
import Register from "./Components/login/register";
import Form from "./Components/form/form";
import Navbar from "./Components/navbar/navbar";
import Vehicules from "./Components/vehicules/vehicules";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const AutosContext = createContext();

const App = () => {
  const [autoList, setAutoList] = useState([]);
  const [brand, setBrand] = useState(null);
  const [seat, setSeat] = useState(null);
  const [type, setType] = useState(null);
  const [price, setPrice] = useState({ values: [0, 110000] });
  const [autonomy, setAutonomy] = useState({ values: [0, 1000] });
  const [reloadTime, setReloadTime] = useState(null);

  const [brandList, setBrandList] = useState(null);
  const [typeList, setTypeList] = useState(null);
  const [seatList, setSeatList] = useState(null);

  return (
    <div className="bg-gray-900 content h-full">
      <AutosContext.Provider
        value={{
          brandList,
          typeList,
          seatList,
          autoList,
          brand,
          seat,
          type,
          price,
          autonomy,
          reloadTime,
          setAutoList,
          setBrand,
          setSeat,
          setType,
          setPrice,
          setAutonomy,
          setReloadTime,
          setBrandList,
          setTypeList,
          setSeatList,
        }}
      >
        <Router>
          <Navbar />
          <Route exact path="/" component={Form} />
          <Route path="/vehicules" component={Vehicules} />
          <Route path="/contact" component={Favoris} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Footer />
        </Router>
      </AutosContext.Provider>
    </div>
  );
};

export default App;
