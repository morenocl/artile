import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from './containers/NavBar';
import {NavCol} from './containers/NavCol';
import Main from './containers/Main';
import Pie from './containers/Pie';

import './res/css/style.css'

/*  style={{'padding-right': '0px',}} */

const App = () => {
  return(
    <>
      <div className="App" id='page-container'>
        <NavBar />
        <Row style={{'marginRight': '0px',}}>
          <Col xs={12} sm={3} md={2} lg={1}>
            <NavCol />
          </Col>
          <Col xs={12} sm={9} md={10} lg={11}>
            <Main />
          </Col>
        </Row>
      </div>
      <Pie />
    </>
  )
}

export default App;
