// src/components/CardPizza.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <Card.Text>Precio: ${price.toLocaleString()}</Card.Text>
        <Button variant="primary" className="w-100 mb-2">
          Ver más
        </Button>
        <Button variant="success" className="w-100">
          Añadir 🛒
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
