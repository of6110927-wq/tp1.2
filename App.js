import React, { useState } from "react";
import Home from "./src/paginas/Home";
import ArrayPage from "./src/paginas/Array";
import Contacto from "./src/paginas/Contacto";
import "./index.css";

export default function App() {
  const [pantalla, setPantalla] = useState("home");

  return (
    <div className="pantallas">
      <nav className="nav">
        <button onClick={() => setPantalla("home")}>Inicio</button>
        <button onClick={() => setPantalla("Array")}>Servicios</button>
        <button onClick={() => setPantalla("contacto")}>Contacto</button>
      </nav>
      <div className="paginas">
        {pantalla === "home" && <Home />}
        {pantalla === "Array" && <ArrayPage />}
        {pantalla === "contacto" && <Contacto />}
      </div>
    </div>
  );
}
