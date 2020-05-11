import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Envio = (props) => {
  return(
    <Modal.Dialog size='lg'>
      <Modal.Header>
        <Modal.Title>
          Nuestros datos de envio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Trabajamos con un servicio de entrega puerta a puerta mediante mensajería en moto, una vez
        realizada tu compra nos pondremos en contacto con vos para coordinar los detalles de
        entrega.
        </p>
        <p>
        El envío tiene un costo adicional dependiendo de la zona en la que quieras recibir tus
        productos, para consultar el costo antes de realizar tu compra podes pedir la cotización
        personalizada a nuestro servicio al cliente.
        </p>
        <p>
        A modo de referencia los precios para entregas en la provincia de Bs. As. varían entre $400 y
        $600 y para capital federal y alrededores entre $500 y $800.
        </p>
        <p>
        El tiempo estimado que Artile demora en preparar y despachar tu pedido es de 48hs máximo.
        </p>
        <p>
        Los pedidos con entrega fuera de la provincia de Buenos Aires se realizan mediante Correo
        Argentino, podrás consultar el costo en www.correoargentino.com.ar.
        </p>
      </Modal.Body>
    </Modal.Dialog>
  )
}

export default Envio;
