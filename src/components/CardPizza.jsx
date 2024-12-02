import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ pizza, onClickAdd }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />{" "}
      {/* Corregido: uso de pizza.img para la imagen */}
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.price}
        </Card.Text>
        <Button variant="primary" onClick={onClickAdd}>
          Añadir 🛒
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
