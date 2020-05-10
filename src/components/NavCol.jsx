import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';

import '../res/css/navcol.css'

export const NavCol = () => {

return (
  <Row justify='true'>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <LinkContainer xs={4} md={12} to="/ofertas"><Button  className='button-navcol'>Ofertas</Button></LinkContainer>
      <LinkContainer xs={4} md={12} to="/catalogo"><Button className='button-navcol'>Catalogo</Button></LinkContainer>
      <LinkContainer xs={4} md={12} to="/nosotros"><Button className='button-navcol'>Nosotros</Button></LinkContainer>
    </Nav>
    </Col>
    <Col xs={12}>
    <Nav variant="pills" className="justify-content-center" >
      <LinkContainer xs={4} md={12} to="/politicas"><Button className='button-navcol'>Politicas</Button></LinkContainer>
      <LinkContainer xs={4} md={12} to="/envios"><Button className='button-navcol'>Envios</Button></LinkContainer>
      <LinkContainer xs={4} md={12} to="/contacto"><Button className='button-navcol'>Contacto</Button></LinkContainer>
    </Nav>
    </Col>
  </Row>
);}

export default NavCol;
