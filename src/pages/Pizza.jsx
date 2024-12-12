import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPizzaDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al cargar la pizza:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzaDetails();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!pizza) return <div>Pizza no encontrada</div>;

  return (
    <Container>
      <h2>{pizza.name}</h2>
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />{" "}
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Descripción:</strong> {pizza.desc}
          </Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}
          </Card.Text>
          <Button variant="primary">Añadir al carrito 🛒</Button>{" "}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pizza;
