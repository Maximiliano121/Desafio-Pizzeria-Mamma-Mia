import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas"); // Ajusta la URL para producción si es necesario
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <p className="h4">Cargando pizzas...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h2 className="text-center mt-4">Nuestras Pizzas</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))
        ) : (
          <p className="text-center">
            No hay pizzas disponibles en este momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
