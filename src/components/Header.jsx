// src/components/Header.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Usamos Bootstrap para el layout

const Header = () => {
  return (
    <header
      className="bg-dark text-white py-5"
      style={{
        backgroundImage: "url('./Header.jpg')", // Asegúrate de que la imagen esté en /public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="text-center">
        <Row>
          <Col>
            <h1>¡Pizzería Mamma Mía!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
