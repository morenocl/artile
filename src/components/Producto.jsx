import React from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'


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
        <Button onClick={()=>{agregar({...item, cantidad:1})}} variant="success" align='left'>$ {item.precio}</Button>
        <Button onClick={props.onHide} data-dismiss="modal">Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Producto;
