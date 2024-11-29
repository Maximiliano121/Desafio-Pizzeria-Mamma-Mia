import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
// import Home from "./components/Home";
// import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pizza />
      {/* <Home /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;
