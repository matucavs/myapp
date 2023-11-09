import React, { useState } from "react";

const Saludo = () => {
  const [nombre, setNombre] = useState("");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">¡Hola {nombre || 'Usuario'}!</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saludo;

