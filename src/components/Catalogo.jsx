import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import '../res/css/catalogo.css'
/*  style={{ width: '12rem' }} */
const Catalogo = (props) => {
  const { data } = props;

  const mapeo = ({title, text, button, img, categ}, i, tab) => {
    console.log(categ, tab);
    if (categ === tab)
      return(<Col xs={4} lg={3}>
        <Card key={i} >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{button}</small>
          </Card.Footer>
        </Card></Col>
      )
  }

  const tabs = (
    <Tabs defaultActiveKey="guagua" id="uncontrolled-tab-example">
      <Tab eventKey="guagua" title="Artile Guagua">
        <CardDeck>
          { data.map((dato, i) => {return (mapeo(dato, i, 'guagua'))}) }
        </CardDeck>
      </Tab>
      <Tab eventKey="natural" title="Artile Natural">
        <CardDeck>
          { data.map((dato, i) => {return (mapeo(dato, i, 'natural'))}) }
        </CardDeck>
      </Tab>
      <Tab eventKey="textil" title="Artile Labores Textiles">
        <CardDeck>
          { data.map((dato, i) => {return (mapeo(dato, i, 'textil'))}) }
        </CardDeck>
      </Tab>
      <Tab eventKey="kutxa" title="Artile Mimos & Regalos">
        <CardDeck>
          { data.map((dato, i) => {return (mapeo(dato, i, 'kutxa'))}) }
        </CardDeck>
      </Tab>
    </Tabs>
  )

  return(<>
    <h1>Catalogo</h1>
    {tabs}
    </>
  )
}

export default Catalogo
