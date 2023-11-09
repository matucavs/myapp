import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const ProductoCard = ({
  nombre,
  descripción,
  precio,
  sku,
  cantidadDisponible,
}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="mt-2 ml-2 bg-dark text-white">
        <Card.Body>
          <Card.Title className="title">{nombre}</Card.Title>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/fotos-premium/manzanas-verdes-bolsa-yute-gotas-agua-sobre-pared-oscura_168171-466.jpg"/>
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
            <div className="botones">
              <Button variant="primary">
                <i className="bi bi-cart"></i>Comprar</Button>
            </div>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductoCard;
