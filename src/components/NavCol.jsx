import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const NavCol = () => {

return (
  <Nav variant="pills" className="flex-column">
    <Nav.Link href="/">Inicio</Nav.Link>
    <Nav.Link href="/ofertas">Ofertas</Nav.Link>
    <Nav.Link href="/catalogo">Catalogo</Nav.Link>
    <Nav.Link href="/nosotros">Nosotros</Nav.Link>
    <Nav.Link href="/politicas">Politicas</Nav.Link>
    <Nav.Link href="/envios">Envios</Nav.Link>
    <Nav.Link href="/contacto">Contacto</Nav.Link>
  </Nav>
);}

export default NavCol;
