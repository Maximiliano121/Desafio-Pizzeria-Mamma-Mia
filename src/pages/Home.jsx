import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext"; // Importar el contexto del carrito
import CardPizza from "../components/CardPizza"; // Componente para mostrar las pizzas

const Home = () => {
  const { add } = useContext(CartContext); // Función para agregar productos al carrito
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      alert("No se pudo conectar con la API. Por favor, intenta de nuevo.");
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <Container>
      <h2>Selecciona tu pizza favorita</h2>
      <Row>
        {pizzas.map((pizza) => (
          <Col md={4} key={pizza.id}>
            <CardPizza pizza={pizza} onClickAdd={() => add(pizza)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
