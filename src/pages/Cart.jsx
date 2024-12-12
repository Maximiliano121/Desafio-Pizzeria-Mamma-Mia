import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { token } = useContext(UserContext); // Obtener el token del contexto de usuario

  // Manejar el checkout
  const handleCheckout = async () => {
    if (!token) {
      Swal.fire({
        title: "Error",
        text: "Debes iniciar sesión para realizar una compra.",
        icon: "error",
      });
      return;
    }

    try {
      console.log("Vista del token:", token);
      console.log("Token enviado:", token);
      const response = await fetch("http://localhost:8080/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Asegurar el envío del token
        },
        body: JSON.stringify({ cart: cart.products }),
      });

      const data = await response.json();
      console.log("Respuesta del backend:", data); // Agregar para depuración
      console.log("Estado HTTP:", response.status); // Estado HTTP

      if (!response.ok) {
        Swal.fire({
          title: "Error",
          text: data.error || "No se pudo completar la compra.",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "¡Éxito!",
          text: "Compra realizada con éxito.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error en checkout:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar el checkout.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {cart.products.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${(product.price * product.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.products.length > 0 && (
        <div className="text-end">
          <button className="btn btn-primary" onClick={handleCheckout}>
            Realizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
