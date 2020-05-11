import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Contacto = (props) => {
  const { data } = props;

  const contacto = data.map(({nombre, link, img}) => {
    return (
      <h3>
        <a class='link' target="_blank" href={link}>
          <SocialIcon url={link} style={{ height: 42, width: 42 }}/>
          {' '}{nombre}
        </a>
      </h3>
    )
  });

  return(<>
    <h1>Nuestros medios de contacto.</h1>
    {contacto}
  </>)
}

export default Contacto;
