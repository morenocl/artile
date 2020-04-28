import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';

export const NavCol = () => {

return (
  <Row justify='true'>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <LinkContainer xs={4} to="/ofertas"><Button block>Ofertas</Button></LinkContainer>
      <LinkContainer xs={4} to="/catalogo"><Button block>Catalogo</Button></LinkContainer>
      <LinkContainer xs={4} to="/nosotros"><Button block>Nosotros</Button></LinkContainer>
    </Nav>
    </Col>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <LinkContainer to="/politicas"><Button block>Politicas</Button></LinkContainer>
      <LinkContainer to="/envios"><Button block>Envios</Button></LinkContainer>
      <LinkContainer to="/contacto"><Button block>Contacto</Button></LinkContainer>
    </Nav>
    </Col>
  </Row>
);}

export default NavCol;
