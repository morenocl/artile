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
  const { categ, mapeoCard } = props;

  const taby = [];

  for (const p in categ){
    taby.push(
      <Tab eventKey={categ[p].key} title={categ[p].title} key={p}>
        <CardDeck>
          { categ[p].elems.map((dato, i) => {return (mapeoCard(dato, i))}) }
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
    </>
  )
}

export default Catalogo
