import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NavCol = () => {

return (
  <Row justify='true'>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <Nav.Link xs={4} href="/ofertas"><h4>Ofertas</h4></Nav.Link>
      <Nav.Link xs={4} href="/catalogo"><h4>Catalogo</h4></Nav.Link>
      <Nav.Link xs={4} href="/nosotros"><h4>Nosotros</h4></Nav.Link>
    </Nav>
    </Col>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <Nav.Link href="/politicas"><h4>Politicas</h4></Nav.Link>
      <Nav.Link href="/envios"><h4>Envios</h4></Nav.Link>
      <Nav.Link href="/contacto"><h4>Contacto</h4></Nav.Link>
    </Nav>
    </Col>
  </Row>
);}

export default NavCol;
