import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        🍕 Pizzería Mamma Mía
      </Link>{" "}
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="btn btn-outline-light" to="/">
            Home
          </Link>
        </li>

        {token ? (
          <>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/profile">
                🔓 Profile
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger">🔒 Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="btn btn-outline-primary" to="/login">
                🔐 Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-secondary" to="/register">
                🔐 Register
              </Link>
            </li>
            <Link className="nav-link" to="/profile">
              Perfil
            </Link>
          </>
        )}
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="btn btn-outline-light" to="/cart">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
