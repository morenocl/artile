import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import '../res/css/catalogo.css'

const Catalogo = (props) => {
  const { data } = props;

  const cards1 = (
    <CardColumns>
      {data.map(({title, text, button}, i) => {
        return (
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
        )})
      }
    </CardColumns>
  );
  const cards2 = (
    <CardColumns>
      {data.map(({title, text, button}, i) => {
        return (
          <Card style={{ width: '12rem' }} key={i}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{button}</small>
            </Card.Footer>
          </Card>
        )})
      }
    </CardColumns>
);

  return(<>
    <h1>Catalogo</h1>
    {cards1}
    {cards2}
    </>
  )
}

export default Catalogo
