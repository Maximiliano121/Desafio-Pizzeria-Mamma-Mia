// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap"; // Usamos Bootstrap para el layout
import CardPizza from "../components/CardPizza"; // Importamos el componente de tarjeta

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
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
    return <p>Cargando pizzas...</p>;
  }

  return (
    <Container>
      <h2 className="mt-5 text-center">Nuestras Pizzas</h2>
      <Row>
        {pizzas.map((pizza) => (
          <Col sm={12} md={6} lg={4} key={pizza.id} className="mb-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
