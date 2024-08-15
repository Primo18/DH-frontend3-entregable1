import React, { useState } from "react";
import Card from "./Card";

function App() {
  // Estado para controlar los inputs y el estado de error
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Manejar el cambio de los inputs
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los inputs
    if (name.trim().length >= 3 && color.length >= 6) {
      setError(false);
      setSubmitted(true);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu color favorito (formato HEX)"
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
      {error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta.</p>}
      {submitted && <Card name={name} color={color} />}
    </div>
  );
}

export default App;
