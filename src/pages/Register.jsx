import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
      });
      return;
    }

    const success = await register(email, password);
    if (success) {
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Redirigiendo...",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo registrar al usuario",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registro</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
