import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute tokenRequired={true} redirectTo="/login">
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute tokenRequired={false} redirectTo="/">
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute tokenRequired={false} redirectTo="/">
                <Register />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
