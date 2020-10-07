import React from "react";
import Navbar from "./Components/navbar/navbar";
import Card from "./Components/card/card";

const App = () => {
  return (
    <div className="w-full h-full bg-gray-900">
      <Navbar />
      <Card />
    </div>
  );
};

export default App;
