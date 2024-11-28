import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validar el formulario al hacer clic en enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Validaciones
    if (!email || !password || !confirmPassword) {
      window.alert("Error: Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      window.alert("Error: La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      window.alert("Error: Las contraseñas no coinciden.");
      return;
    }

    // Si todo está bien
    window.alert("¡Registro exitoso!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Campo Contraseña */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Campo Confirmar Contraseña */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Botón Enviar */}
        <button type="submit" className="btn btn-primary w-100">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
