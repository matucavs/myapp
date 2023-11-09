import React from "react";
//import Saludo from "./Components/saludoDinamico";
import ProductoCard from "./Components/productoCard";
import NavbarTop from "./Components/navegacion";


const App = () => {
  return (
    <div>
      {/* <Saludo /> */}
      <NavbarTop/>
      <ProductoCard
        nombre="Manzana Verde"
        descripción="Manzana verde orgánica / agroecológica"
        precio="300.00"
        sku="123456"
        cantidadDisponible="200"
      />
    </div>
  );
};

export default App;
