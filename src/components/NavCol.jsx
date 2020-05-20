import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { LinkContainer } from 'react-router-bootstrap';

import '../res/css/navcol.css'

export const NavCol = () => {
  const [isWidth, setWidth] = useState(window.innerWidth > 450);
  const updateMedia = () => {
    setWidth(window.innerWidth > 450)
  }
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  })

  const list = [
    {
      title: 'Ofertas',
      to: '/ofertas',
    },
    {
      title: 'Catalogo',
      to: '/catalogo',
    },
    {
      title: 'Nosotros',
      to: '/nosotros',
    },
    {
      title: 'Politicas',
      to: '/politicas',
    },
    {
      title: 'Envios',
      to: '/envios',
    },
    {
      title: 'Contacto',
      to: '/contacto',
    },
  ]

  const c = (
    list.map((item, i) => {return (
      <Accordion.Collapse eventKey='0'>
        <LinkContainer xs={4} md={12} to={item.to}><Button block>{item.title}</Button></LinkContainer>
      </Accordion.Collapse>
    )})
  )

  const comp = (
    <Accordion>
      <Card style={{'background-color': 'var(--azul2)'}}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Menu
        </Accordion.Toggle>
        {c}
      </Card>
    </Accordion>
  )

  const nav = (
    <Row justify='true'>
      <Col xs={12}>
        <Nav variant="pills" className="justify-content-center" >
          {list.map(item => {return (
            <Col sm={2}
              style={{'padding-right': '0px','padding-left': '0px'}}>
              <LinkContainer md={12} to={item.to}>
                <Button className='button-navcol'>{item.title}</Button>
              </LinkContainer>
            </Col>
          )})}
      </Nav>
      </Col>
    </Row>
  )

  return (
    isWidth ?
      nav
    : comp
  )
}

export default NavCol;
