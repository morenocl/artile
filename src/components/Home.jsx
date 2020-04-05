import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const Home = (props) => {
  const presentacion = (
    <>
      <h1>Pagina principal</h1>
      <p>Aca puede ir la descripcion de la pagina, muy breve ya que se ve cuando apenas entras</p>
    </>
  );
  const { data } = props;

  const carrusel = (
    <Carousel>
      {data.map( ({imgSrt, title, text}, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              data-src="holder.js/800x200?text= &bg=373940"
              alt= {imgSrt}
            />
            <Carousel.Caption>
              <h3>{title}</h3>
              <p>{text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      )}
    </Carousel>
  );

  return(
    <>
      {carrusel}
      {presentacion}
    </>
  )
}

export default Home;
