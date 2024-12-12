import React, { createContext, useState, useContext } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    total: 0,
    products: [],
  });

  // Función para agregar productos al carrito
  const add = (pizza) => {
    const updatedProducts = [...cart.products];
    const productIndex = updatedProducts.findIndex((p) => p.id === pizza.id);

    if (productIndex !== -1) {
      updatedProducts[productIndex].qty += 1;
    } else {
      updatedProducts.push({ ...pizza, qty: 1 });
    }

    const total = updatedProducts.reduce(
      (sum, product) => sum + product.price * product.qty,
      0
    );

    setCart({ total, products: updatedProducts });
  };

  // Función para eliminar productos del carrito
  const remove = (pizza) => {
    const updatedProducts = [...cart.products];
    const productIndex = updatedProducts.findIndex((p) => p.id === pizza.id);

    if (productIndex !== -1) {
      updatedProducts[productIndex].qty -= 1;

      if (updatedProducts[productIndex].qty === 0) {
        updatedProducts.splice(productIndex, 1);
      }
    }

    const total = updatedProducts.reduce(
      (sum, product) => sum + product.price * product.qty,
      0
    );

    setCart({ total, products: updatedProducts });
  };

  // Exportar el contexto
  return (
    <CartContext.Provider value={{ cart, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
