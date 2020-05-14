import React from 'react';
import {useState} from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import {LinkContainer} from 'react-router-bootstrap'
import {mediosDePago} from '../res/Datos'

const Chango = (props) => {
  const {update, remove, enviarPedido} = props;
  const [pagos, setPagos] = useState(false);

  const showPago = () => {
    return (
      pagos ?
        <CardDeck>
          <Card sm={6}>
            <Card.Header>Transferencia bancaria</Card.Header>
            <Card.Body>
              <Card.Text>
                Banco: {mediosDePago.banco.banco}<br/>
                Titular: {mediosDePago.banco.titular}<br/>
                Nº de cuenta: {mediosDePago.banco.cuenta}<br/>
                Alias CBU: {mediosDePago.banco.alias}<br/>
                Nº CBU: {mediosDePago.banco.cbu}<br/>
                {mediosDePago.banco.tipo}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card sm={6}>
            <Card.Header>Deposito Uala</Card.Header>
            <Card.Body>
              <Card.Text>
                Titular: {mediosDePago.uala.titular}<br/>
                Alias CBU: {mediosDePago.uala.alias}<br/>
                Nº CBU: {mediosDePago.uala.cbu}<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Informa tu pago!</Card.Header>
              <Card.Body>
                <Card.Text>
                  Envianos un Whatsapp asi ya reservamos tu pedido.
                  <br/>
                  Una vez hecho el pago nos envias el cupon de pago y te enviamos tu producto!
                </Card.Text>
                <Button onClick={enviarPedido}>Enviar</Button>
              </Card.Body>
          </Card>
        </CardDeck>
      : null
    )
  }

  const vacio = () => {
    return (
      <Alert variant='primary'>
        <Alert.Heading>Chango vacio</Alert.Heading>
        <p> Su chango esta vacio, vaya a {
          <LinkContainer to="/catalogo"><a>Catalogo</a></LinkContainer>
        } y arme su compra.</p>
      </Alert>
    )
  }

  let total = 0;
  const lista =
      <ListGroup>
        {props.productos.map((p, i) => {
          total += p.cantidad*p.precio;
          return(
            <ListGroup.Item key={i} id='item-lista-chango'>
              <Button key={'restar'} variant="outline-primary"
                onClick={()=>{update({id: p.id, cantidad: -1,})}}>-1
              </Button>
              <Button key={'agregar'} variant="outline-primary"
                onClick={()=>{update({id: p.id, cantidad: +1,})}}>+1
              </Button>
              <Button key={'eliminar'} variant="outline-primary"
                onClick={()=>{remove({id: p.id,})}}>🗑
              </Button>
              {' '}
              {p.title + ': '}
              {p.cantidad + ' * '}
              {'$' + p.precio + ' => '}
              {'$' + p.cantidad*p.precio}
            </ListGroup.Item>
          )
        })}
        {total ?
          <ListGroup.Item variant="success" action onClick={()=>{setPagos(!pagos)}} id='total-lista-chango'>
            Total: ${total}
            <Button onClick={()=>{setPagos(!pagos)}}>Medios de Pago</Button>
          </ListGroup.Item>
          : vacio()
        }
      </ListGroup>

  return (
    <>
      <h1>Chango </h1>
      {lista}
      {showPago()}
    </>
  )
}

export default Chango;
