import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      window.alert("Error: Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      window.alert("Error: La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    window.alert("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
