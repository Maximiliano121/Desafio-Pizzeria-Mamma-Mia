import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios",
        icon: "error",
      });
      return;
    }

    const success = await login(email, password);
    if (success) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
