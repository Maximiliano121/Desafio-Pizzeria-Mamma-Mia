// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { CartContextProvider } from "./context/CartContext"; // Asegúrate de que esté importado correctamente
import { UserContextProvider } from "./context/UserContext"; // Asegúrate de que esté importado correctamente
import Footer from "./components/Footer"; // Asegúrate de que esté importado correctamente

const App = () => {
  return (
    <UserContextProvider>
      {/* Proveedor para el usuario */}
      <CartContextProvider>
        {/* Proveedor para el carrito */}
        <Navbar /> {/* Navbar siempre debe estar visible */}
        <Header />
        <main>
          <Routes>
            {/* Rutas definidas */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> {/* Footer debe ir aquí, después de las rutas */}
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
