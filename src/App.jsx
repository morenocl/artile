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
          <Row className="justify-content-md-center" style={{'marginRight': '0px',}}>
            <Col xs={12} sm={12} md={12} lg={10}>
              <NavCol />
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{'marginRight': '0px',}}>
            <Col xs={12} sm={12} md={12} lg={10}>
              <Main />
            </Col>
          </Row>
      </div>
      <Pie />
    </>
  )
}

export default App;
