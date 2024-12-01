import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">{pizza.name}</h2>
      <div className="text-center">
        <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
      </div>
      <p className="text-center mt-3">{pizza.description}</p>
      <h3 className="text-center">Precio: ${pizza.price.toLocaleString()}</h3>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="btn btn-primary">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;
