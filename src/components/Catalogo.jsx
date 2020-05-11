import React, { useState } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Producto from './Producto'
import '../res/css/catalogo.css'
import {dispatchProd} from '../containers/Cart.ducks'
/*  style={{ width: '12rem' }} */

export const mapDispatchToProps = ({
  setProd: dispatchProd,
});

const Catalogo = (props) => {
  const { categ, setProd } = props;

  const init = {
    aceites: true,
    tinturas: true,
    cremas: true,
    canastas: true,
    almoha: true,
    otros: true,
  }
  const [state, setState] = useState(init)

  const [id, setId] = useState(0);
  // Si si clickea sobre un producto, lo busca y prepara para ver.
  const prod = () => {
    for (var tag in categ){
      const p = categ[tag].elems.find(e => e.id===id);
      if(p) return(p); else console.log("Si Modal esta renderizado -> el id de producto es invalido.");
    }
  };

  const botones = (
    <Row className="show-grid" float="center">
      <Col xs={12} md='auto' style={{'padding-right': '2px'}}>
        <Button variant="primary" onClick={() => {setState(init)}}>
          todo</Button>{' '}
        <Button variant="secondary" onClick={() => {setState({...state, aceites:!state.aceites}); console.log(state)}}>
          Aceites</Button>{' '}
        <Button variant="success" onClick={() => {setState({...state, tinturas:!state.tinturas}); console.log(state)}}>
          Tinturas</Button>{' '}
        <Button variant="dark" onClick={() => {setState({...state, otros:!state.otros})}}>
          otros</Button>{' '}
      </Col>
      <Col xs={12} md='auto' style={{'padding-left': '2px'}}>
        <Button variant="warning" onClick={() => {setState({...state, cremas:!state.cremas}); console.log(state)}}>
          Cremas</Button>{' '}
        <Button variant="danger" onClick={() => {setState({...state, canastas:!state.canastas}); console.log(state)}}>
          Canastas</Button>{' '}
        <Button variant="info" onClick={() => {setState({...state, almoha:!state.almoha}); console.log(state)}}>
          Almohadillas</Button>{' '}
      </Col>
    </Row>
  );

  const taby = [];

  for (const p in categ){
    taby.push(
      <Tab xs={6} eventKey={categ[p].key} title={categ[p].title} key={p}>
        {categ[p].key === 'natural' ? botones : undefined}
        <CardDeck>
          { categ[p].elems.map(({id, title, text, button, img, categ, filtro}, i) => {
            if (categ !== 'natural' || (categ === 'natural' && state[filtro])){
              return(
                <Col xs={12} sm={12} md={4} lg={3} key={i} style={{'padding-left': '0px','padding-right': '0px', 'margin-bottom': '10px', 'margin-top': '10px',}}>
                    <Card key={i}>
                      <Card.Img variant="top" src={img[0]}  tag='a' onClick={()=>{setId(id)}}/>
                      <Card.Body tag='a' onClick={()=>{setId(id)}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          {text.length > 100 ? text.substring(0, 100) + '...' : text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
              )
            }
          }) }
        </CardDeck>
      </Tab>
    )
  };

  const tab = (
    <Tabs defaultActiveKey="guagua" id="uncontrolled-tab-example">
      {taby.map((t, i) => {return(t)})}
    </Tabs>
  );

  return(<>
    <h1>Catalogo</h1>
    {tab}
    <Producto
      prod={prod}
      agregar={setProd}
      id={id}
      show={id!==0}
      onHide={() => setId(0)}
    />
    </>
  )
}

export default connect(null, mapDispatchToProps)(Catalogo)
