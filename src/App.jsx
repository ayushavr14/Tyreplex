import React from "react";
import Navbar from "./components/NavBar";
import MainCard from "./MainCard";
import Services from "./Services";
import Deals from "./Deals";
import Products from "./Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainCard />
      <Deals />
      <Services />
      <Products />
    </div>
  );
};

export default App;
