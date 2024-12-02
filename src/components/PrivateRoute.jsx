import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const PrivateRoute = ({ tokenRequired, redirectTo, children }) => {
  const { token } = useContext(UserContext);

  if (tokenRequired && !token) {
    return <Navigate to={redirectTo} />;
  }

  if (!tokenRequired && token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
