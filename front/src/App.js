import React from "react";
import Card from "./Components/card/card";
import Navbar from "./Components/navbar/navbar";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Navbar />
      <Card />
    </div>
  );
};

export default App;
