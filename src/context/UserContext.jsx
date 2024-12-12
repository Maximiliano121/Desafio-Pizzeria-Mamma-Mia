import React, { createContext, useState, useEffect } from "react"; // Agrega useEffect

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        console.error(data.error);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider value={{ token, email, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
