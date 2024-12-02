import React, { createContext, useState, useContext } from "react";

// Crear el contexto para el carrito
export const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    total: 0,
    products: [],
  });

  const add = (pizza) => {
    const productsQty = [...cart.products];
    let total = 0;

    const indexPizza = productsQty.findIndex((p) => p.id === pizza.id);
    const pizzaFounded = indexPizza !== -1;

    if (pizzaFounded) {
      const currentPizza = productsQty[indexPizza];
      currentPizza.qty += 1;
    } else {
      productsQty.push({
        ...pizza,
        qty: 1,
      });
    }

    for (const product of productsQty) {
      total += product.price * product.qty;
    }

    setCart({
      total,
      products: productsQty,
    });
  };

  const remove = (pizza) => {
    const productsQty = [...cart.products];
    let total = 0;

    const indexPizza = productsQty.findIndex((p) => p.id === pizza.id);
    const currentPizza = productsQty[indexPizza];

    currentPizza.qty -= 1;

    for (const product of productsQty) {
      total += product.price * product.qty;
    }

    setCart({
      total,
      products: productsQty.filter((product) => product.qty > 0),
    });
  };

  return (
    <CartContext.Provider value={{ cart, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
