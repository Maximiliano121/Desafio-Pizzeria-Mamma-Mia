// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
export const CartContext = createContext(); // Exporta el contexto

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar un item al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  // Función para eliminar un item del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== pizzaId));
  };

  // Calcular el total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al carrito
export const useCart = () => {
  return useContext(CartContext);
};
