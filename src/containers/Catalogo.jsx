import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import CatalogoScreen from '../components/Catalogo'
import OfertasScreen from '../components/Ofertas'
import { productos, ofertas } from '../res/Datos'


const Catalogo = (props) => {

  const categ = {
    guagua:{title:"Artile Guagua", key:"guagua" , elems:[],},
    natural:{title:"Artile Natural", key:"natural" , elems:[],},
    textil:{title:"Artile Textil", key:"textil" , elems:[],},
    kutxa:{title:"Artile Kutxa", key:"kutxa" , elems:[],},
  };

  productos.forEach(dato => categ[dato.categ].elems.push(dato));

  const mapeoCard = ({title, text, button, img, categ}, i) => {
    return(
      <Col xs={4} lg={3} key={i}>
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
        </Card>
      </Col>
    )
  }


  return(
    props.type === 'ofertas' ?
      <OfertasScreen data={ofertas}/>
      :
      <CatalogoScreen categ={categ} mapeoCard={mapeoCard}/>
  );
}

export default Catalogo;
