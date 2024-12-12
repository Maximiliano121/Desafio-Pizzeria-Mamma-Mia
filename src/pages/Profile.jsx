import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Importa el contexto de usuario
import { useNavigate } from "react-router-dom"; // Importa la función para redirigir

const Profile = () => {
  const { email, logout } = useContext(UserContext); // Extraemos el email y la función logout
  const navigate = useNavigate(); // Para redirigir después de cerrar sesión

  const handleLogout = () => {
    logout(); // Llama a logout para eliminar el token y el email
    navigate("/login"); // Redirige al login después de cerrar sesión
  };

  return (
    <div className="text-center mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p> {/* Muestra el email del usuario */}
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
