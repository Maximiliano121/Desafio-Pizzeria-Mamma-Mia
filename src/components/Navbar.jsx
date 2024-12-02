import React, { useContext } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext); // Obtener el cart del contexto
  const { token, logout } = useContext(UserContext); // Obtener el token y logout
  const navigate = useNavigate(); // Inicializamos useNavigate

  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand onClick={() => navigate("/")}>
          ¡Pizzería Mamma Mía!
        </BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>🍕 Home</Nav.Link>
          {token && (
            <Nav.Link onClick={() => navigate("/profile")}>🔓 Profile</Nav.Link>
          )}
          {token && <Nav.Link onClick={logout}>🔓 Logout</Nav.Link>}
          {!token && (
            <Nav.Link onClick={() => navigate("/login")}>🔐 Login</Nav.Link>
          )}
          {!token && (
            <Nav.Link onClick={() => navigate("/register")}>
              🔐 Register
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link onClick={() => navigate("/cart")}>
            🛒 Total: ${cart.total}
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
