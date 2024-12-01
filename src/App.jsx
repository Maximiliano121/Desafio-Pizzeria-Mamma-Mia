import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from './components/Home';
// import Register from './components/Register';
// import Login from './components/Login';
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
