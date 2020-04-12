import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Producto from './Producto'
import '../res/css/catalogo.css'
/*  style={{ width: '12rem' }} */

const Catalogo = (props) => {
  const { categ } = props;

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
    <>
      <Button variant="primary" onClick={() => {setState(init)}}>
        todo</Button>{' '}
      <Button variant="secondary" onClick={() => {setState({...state, aceites:!state.aceites}); console.log(state)}}>
        Aceites</Button>{' '}
      <Button variant="success" onClick={() => {setState({...state, tinturas:!state.tinturas}); console.log(state)}}>
        Tinturas</Button>{' '}
      <Button variant="warning" onClick={() => {setState({...state, cremas:!state.cremas}); console.log(state)}}>
        Cremas</Button>{' '}
      <Button variant="danger" onClick={() => {setState({...state, canastas:!state.canastas}); console.log(state)}}>
        Canastas</Button>{' '}
      <Button variant="info" onClick={() => {setState({...state, almoha:!state.almoha}); console.log(state)}}>
        Almohadillas</Button>{' '}
      <Button variant="dark" onClick={() => {setState({...state, otros:!state.otros})}}>
        otros</Button>{' '}
    </>
  );

  const taby = [];

  for (const p in categ){
    taby.push(
      <Tab eventKey={categ[p].key} title={categ[p].title} key={p}>
        {categ[p].key === 'natural' ? botones : undefined}
        <CardDeck>
          { categ[p].elems.map(({id, title, text, button, img, categ, filtro}, i) => {
            if (categ !== 'natural' || (categ === 'natural' && state[filtro])){
              return(
                <Col xs={4} lg={3} key={i}>
                    <Card key={i}>
                      <Card.Img variant="top" src='holder.js/100px180'  tag='a' onClick={()=>{setId(id)}}/>
                      <Card.Body tag='a' onClick={()=>{setId(id)}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                          {text}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer tag='a' onClick={()=>{console.log("comprado")}}>
                        <small className="text-muted">{button}</small>
                      </Card.Footer>
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
      id={id}
      show={id!==0}
      onHide={() => setId(0)}
    />
    </>
  )
}

export default Catalogo
