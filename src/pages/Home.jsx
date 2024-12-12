import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { add } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/pizzas");
      const data = await response.json();
      console.log(data);
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
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                  <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
                </Card.Text>
                <Card.Text>
                  <strong>Precio:</strong> ${pizza.price.toLocaleString()}
                </Card.Text>
                <Link to={`/pizza/${pizza.id}`}>
                  <Button variant="primary">Ver más</Button>
                </Link>
                <Button variant="success" onClick={() => add(pizza)}>
                  Añadir 🛒
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
