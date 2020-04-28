import React from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';


const Chango = (props) => {
  const {update} = props;
  const list = props.productos.map((p, i) => {
    return(
      <Row key={i}>
        <p key={i}>
          {p.title + ': '}
          {p.cantidad + ' * '}
          {'$' + p.precio + ' => '}
          {'$' + p.cantidad*p.precio}
        </p>
        <Button key={'restar'}
          onClick={()=>{update({id: p.id, cantidad: -1,})}}>-1
        </Button>
        <Button key={'agregar'}
          onClick={()=>{update({id: p.id, cantidad: +1,})}}>+1
        </Button>
      </Row>
    )})

  let total = 0;
  const lista =
      <ListGroup>
        {props.productos.map((p, i) => {
          total += p.cantidad*p.precio;
          return(
            <ListGroup.Item>
              {p.title + ': '}
              {p.cantidad + ' * '}
              {'$' + p.precio + ' => '}
              {'$' + p.cantidad*p.precio}
              <Button key={'restar'}
                onClick={()=>{update({id: p.id, cantidad: -1,})}}>-1
              </Button>
              <Button key={'agregar'}
                onClick={()=>{update({id: p.id, cantidad: +1,})}}>+1
              </Button>
            </ListGroup.Item>
          )
        })}
        {total ? <ListGroup.Item variant="success">Total: ${total}</ListGroup.Item> : null }
      </ListGroup>

  return (
    <>
      <h1>Chango </h1>
      {lista}
    </>
  )
}

export default Chango;
