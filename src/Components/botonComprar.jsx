import Button from 'react-bootstrap/Button';

const BotonComprar = ({ onClick }) => (
  <div className="botones">
    <Button variant="primary" onClick={onClick}>
      <i className="bi bi-cart"></i>Comprar
    </Button>
  </div>
);

export default BotonComprar;