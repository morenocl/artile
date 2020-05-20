import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';


const NavBar = ({ auth, logout }) => {
  const ingresar = (
      <LinkContainer to="/">
        <Button onClick={() => {logout(!auth);}}>Ingresar</Button>
      </LinkContainer>
  );

  const config = (
    <LinkContainer to="/configuracion">
      <Button onClick={()=>{}}>
        Configuracion
      </Button>
    </LinkContainer>
  );

  const cart = (
    <LinkContainer to="/compra">
      <Button onClick={()=>{}}>
        Chango
      </Button>
    </LinkContainer>
  );

  const logoutButton = (
    <LinkContainer to="/">
      <Button onClick={() => {logout(!auth);}}>
        Logout
      </Button>
    </LinkContainer>
  );

  const home = (
    <LinkContainer to="/">
      <Button onClick={()=>{}}>
        <h3>Artile </h3>
      </Button>
    </LinkContainer>
  )

  return (
    <Navbar>
      <Navbar.Brand>
        {home}
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {/*config*/}
          {cart}
          {/*auth ? logoutButton : ingresar*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};
