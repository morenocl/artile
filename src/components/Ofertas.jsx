import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Ofertas = (props) => {
  const {data} = props;
  const lista = (data.map(({title, text, button}, i) => {
    return(
      <Card key={i}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">{button}</Button>
        </Card.Body>
      </Card>
    );
  }));

  return(
    <>
      <h1>Ofertas</h1>
      {lista}
    </>
  )
}

export default Ofertas;
