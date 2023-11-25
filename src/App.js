import { useState } from "react";
import ProductoCard from "./Components/productoCard";
import NavbarTop from "./Components/navegacion";
import Footer from "./Components/footer";
import productosData from "./productos.json";
import Alert from "react-bootstrap/Alert";
import "./App.css";

const App = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const listaProductos = productosData;

  if (listaProductos.length === 0) {
    return <div>No hay productos disponibles</div>;
  }

  const handleCompraRealizada = () =>
    setCompraRealizada(true) ||
    setTimeout(() => setCompraRealizada(false), 1500);

  return (
    <div className="app">
      <NavbarTop />
      <div className="content d-flex flex-column align-content-center flex-wrap">
        <div className="contenedor-tarjetas">
          {listaProductos.map(({ id, ...producto }) => (
            <ProductoCard
              key={id}
              {...producto}
              onCompraRealizada={handleCompraRealizada}
            />
          ))}
        </div>
        {compraRealizada && (
          <div className="alert1">
            <Alert variant="success">Gracias por su compra.</Alert>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
