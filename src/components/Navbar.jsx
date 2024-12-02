// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"; // Usando componentes de Bootstrap

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="text-white">
            🍕 Home
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" className="text-white">
            🔓 Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-white">
            🔐 Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register" className="text-white">
            🔐 Register
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-white">
            🛒 Total: $
            {/* El total se puede calcular con el contexto del carrito */}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
