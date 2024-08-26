import React from "react";
import Navbar from "./components/NavBar";
import MainCard from "./MainCard";
import Services from "./Services";
import Deals from "./Deals";
import Products from "./Products";
import PaymentMode from "./components/PaymentMode";
import Question from "./Question";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainCard />
      <Deals />
      <Services />
      <Products />
      <PaymentMode />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
