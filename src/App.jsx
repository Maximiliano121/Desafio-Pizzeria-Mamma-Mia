// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext"; // Importamos el CartProvider

const App = () => {
  return (
    <CartProvider>
      <NavigationBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
