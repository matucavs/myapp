import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductoCard = ({ nombre, descripción, precio, sku, cantidadDisponible }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{ width: '18rem' }} class="mt-2 ml-2">
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/green-apple-clipping-path-19314372.jpg" />
        <Card.Text>
          <strong>Descripción:</strong> {descripción}<br />
          <strong>Precio:</strong> ${precio}<br />
          <strong>SKU:</strong> {sku}<br />
          <strong>Cantidad Disponible:</strong> {cantidadDisponible}
        </Card.Text>
        <Button variant="primary"><i className="bi bi-cart"></i>Comprar</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default ProductoCard;
