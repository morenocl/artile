import React from 'react'


const Contacto = (props) => {
  const { data } = props;

  const contacto = data.map(({nombre, link, img}) => {
    return (
      <h3>
        <a target="_blank" href={link}><img src={img} /> {nombre}</a>
      </h3>
    )
  });

  return(<>
    <h1>Nuestros medios de contacto.</h1>
    {contacto}
  </>)
}

export default Contacto;
