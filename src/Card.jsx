import React from "react";

function Card({ name, color }) {
  return (
    <div className="Card">
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{ backgroundColor: color }}></div>
      <p className="color-text">{color}</p>
    </div>
  );
}

export default Card;
