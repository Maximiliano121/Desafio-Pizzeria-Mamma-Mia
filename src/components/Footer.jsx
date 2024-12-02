// src/components/Footer.jsx
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <p className="text-center mb-0">
          &copy; 2021 - Pizzería Mamma Mía! - Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
