import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Tu archivo principal de la app
import { BrowserRouter } from "react-router-dom"; // Solo aquí se debe importar BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* App debe estar dentro de BrowserRouter */}
    </BrowserRouter>
  </React.StrictMode>
);
