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
        <Col xs="auto" sm="auto" md="auto" lg="auto">
          <NavCol />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
      <Pie />
    </div>
  )
}

export default App;
