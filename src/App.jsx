import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from './containers/NavBar';
import {NavCol} from './containers/NavCol';
import Main from './containers/Main';
import Pie from './containers/Pie';

const App = () => {
  return(
    <div className="App">
      <NavBar />
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <NavCol />
        </Col>
        <Col xs={12} sm={9} md={10} lg={11}>
          <Main />
        </Col>
      </Row>
      <Pie />
    </div>
  )
}

export default App;
