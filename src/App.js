import React from "react";
import ProductoCard from "./Components/productoCard";
import NavbarTop from "./Components/navegacion";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div>
      <NavbarTop/>
      <ProductoCard
        nombre="Manzana Verde"
        descripción="Manzana verde orgánica / agroecológica. Origen: Río Negro"
        precio="300.00"
        sku="123456"
        cantidadDisponible="200"
      />
      <Footer/>
    </div>
  );
};

export default App;
