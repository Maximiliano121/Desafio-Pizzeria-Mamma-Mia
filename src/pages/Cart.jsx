import React, { useContext } from "react";
import { Container, ListGroup, Button, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, add, remove } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <Container>
      <h2>Tu carrito</h2>
      {cart.products.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <ListGroup>
          {cart.products.map((pizza) => (
            <ListGroup.Item key={pizza.id}>
              <Row>
                <Col>{pizza.name}</Col>
                <Col>${pizza.price.toLocaleString("es-CL")}</Col>
                <Col>
                  <Button onClick={() => add(pizza)}>+</Button>
                  <span>{pizza.qty}</span>
                  <Button onClick={() => remove(pizza)}>-</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h4>Total: ${cart.total.toLocaleString("es-CL")}</h4>
      <Button variant="primary" disabled={!token}>
        Proceder al Pago
      </Button>
    </Container>
  );
};

export default Cart;
