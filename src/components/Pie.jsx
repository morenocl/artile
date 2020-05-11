import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SocialIcon } from 'react-social-icons';

import '../res/css/pie.css'

const Pie = (props) => {
  const { data } = props;

  const contacto = data.map(({nombre, link, img}, i) => {
    return (
      <Col xs='auto'>
        <a class='link' target="_blank" href={link}>
          <SocialIcon url={link} bgColor='#f2f2f2' style={{ height: 25, width: 25 }}/>
          {' '}{nombre}{'  '}
        </a>
      </Col>
    )
  });

  return (
    <footer>
      <Row style={{'margin-right': '0px',}}>
        {contacto}
        <Col>
          <div class="float-right">©Artile 2020</div>
        </Col>
      </Row>
    </footer>
  )
}

export default Pie;
