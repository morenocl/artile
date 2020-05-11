import React from 'react'
import {useState} from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import {LinkContainer} from 'react-router-bootstrap'
import {store} from '../index'

import '../res/css/ofertas.css'


const Ofertas = (props) => {
  const { data, agregar } = props;
  const [toCarrito, setToCarrito] = useState(false)
  const [thisId, setId] = useState(null)

  const prod = (id) => {
    const p = data.find(e => e.id===id);
    if(p) return(p)
    else return undefined
  }
  const vacio = {
    id:'',
    title:'',
    text:'',
    button:'',
    img:'',
    precio:'',
  }

  const agregarACarrito = (id)=>{
    setId(id)
    const e = prod(id);
    const item = e ? e : vacio;
    agregar({...item, cantidad:1});
    setToCarrito(true)
  }

  const botonCarrito = (
    <LinkContainer to="/compra"><Button>Ir a carrito</Button></LinkContainer>
  )

  const lista = (data.map(({id, title, text, button, img}, i) => {
    return(
      <Col xs={12} sm={12} md={6} lg={6} key={id} style={{'margin-bottom': '10px', 'margin-top': '10px',}}>
        <Card key={i}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button onClick={()=>{agregarACarrito(id)}} variant="primary">{button}</Button>
            {toCarrito && id===thisId ? botonCarrito : null}
          </Card.Body>
        </Card>
      </Col>
    );
  }));

  return(
    <>
      <h1>Ofertas</h1>
      <CardDeck>
        {lista}
      </CardDeck>
    </>
  )
}

export default Ofertas;
