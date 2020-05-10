import React from 'react'
import {useState} from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import {store} from '../index'

const Producto = (props) => {
  const { id, show, onHide, prod, agregar } = props;
  const vacio = {
    id:'',
    title:'',
    text:'',
    button:'',
    img:'',
    categ:'',
    filtro:'',
    precio:'',
  }
  const e = prod();
  const item = e ? e : vacio;
  const [toCarrito, setToCarrito] = useState(-1 !== store.getState().Cart.productos.findIndex(x => x.id === item.id))

  const botonCarrito = (
      <LinkContainer to="/compra"><Button>Ir a carrito</Button></LinkContainer>
    )
  const boton = (
    <Button
      onClick={()=>{
        agregar({...item, cantidad:1}); setToCarrito(true)
      }}
      variant="success" align='left'>
      $ {item.precio}
    </Button>
  )

  return (
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
          {item.title}
          <h2><Badge variant="success" align='right'>$ {item.precio}</Badge></h2>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src='holder.js/100px180' thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src='holder.js/100px180' thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <p>{item.text}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='modal-footer justify-content-between'>
        {boton} {toCarrito ? botonCarrito : null}
        <Button onClick={props.onHide} data-dismiss="modal">Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Producto;
