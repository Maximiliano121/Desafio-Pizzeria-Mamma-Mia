import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar errores al escribir
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let valid = true;
    let errorMessages = { email: "", password: "" };

    // Validación de campos vacíos
    if (!email || !password) {
      errorMessages = {
        email: !email ? "El email es obligatorio." : "",
        password: !password ? "La contraseña es obligatoria." : "",
      };
      valid = false;
    }

    // Validación de longitud de la contraseña
    if (password.length < 6) {
      errorMessages.password =
        "La contraseña debe tener al menos 6 caracteres.";
      valid = false;
    }

    if (!valid) {
      setErrors(errorMessages);
      return;
    }

    // Si la validación pasa
    window.alert("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Campo Contraseña */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={
            errors.email ||
            errors.password ||
            !formData.email ||
            !formData.password
          }
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
