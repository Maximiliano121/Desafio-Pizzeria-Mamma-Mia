import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      name: "Napolitana",
      price: 5950,
      quantity: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      name: "Española",
      price: 6950,
      quantity: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
      name: "Salame",
      price: 6950,
      quantity: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    },
  ]);

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detalles del pedido:</h1>
      <div>
        {cart.map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between border-bottom py-3"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "80px", height: "80px", marginRight: "15px" }}
              />
              <span>{item.name}</span>
            </div>

            <div>${(item.price * item.quantity).toLocaleString()}</div>

            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => decrementQuantity(index)}
              >
                -
              </button>
              <span className="mx-3">{item.quantity}</span>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => incrementQuantity(index)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-end mt-4">
        Total: ${calculateTotal().toLocaleString()}
      </h3>

      <div className="text-center">
        <button className="btn btn-primary mt-3">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
