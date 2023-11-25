//import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import BotonComprar from "./botonComprar";

const ProductoCard = ({
  nombre,
  descripción,
  precio,
  sku,
  cantidadDisponible,
  img,
  onCompraRealizada,
}) => {
  const handleComprarClick = () => {
    onCompraRealizada();
  };

  return (
    <div className="card-container d-flex justify-content-center align-items-center">
      <Card className="my-2 mx-2 bg-dark text-white">
        <Card.Body>
          <Card.Title className="title">{nombre}</Card.Title>
          <div className="overlay"></div>
          <Card.Img variant="top" src={img} />
          <Card.ImgOverlay>
            <Card.Text className="cardtext">
              <span className="textoNg">Descripción:</span> {descripción}
              <br />
              <span className="textoNg">Precio:</span> ${precio}
              <br />
              <span className="textoNg">SKU:</span> {sku}
              <br />
              <span className="textoNg">Cantidad Disponible:</span>{" "}
              {cantidadDisponible}
            </Card.Text>
            <BotonComprar onClick={handleComprarClick} />

            {/* <div className="botones">
              <Button variant="primary" onClick={handleComprarClick}>
                <i className="bi bi-cart"></i>Comprar
              </Button>
            </div> */}
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductoCard;
