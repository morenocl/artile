import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Politicas = () => {
  return(
    <Modal.Dialog size='lg'>
      <Modal.Header>
        <Modal.Title>
          Nuestras politicas de devolucion y reembolso
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Podras revocar la compra realizada o solicitar cambiosm sin responsabilidad alguna, dentro de los 10 dias corridos a partir de la recepción del producto adquirido. A tal efecto, el producto no debe haber sido usado y debe ser devuelto en el mismo estado en el que se recibió, siempre conservando su empaque original y sus accesorios, si los hibiere.
        </p>
        <p>
        La revocación de una compra puede realizarse enviando un mail a 'email', indicando el numero de la orden y el articulo a devolver o bien llamando al 'telefono', de Lunes a Viernes de 9:00 a 18:00 hs. (hora Argentina).
        </p>
        <p>
        Los gastos de devolucion estarán a cargo de Artile y obtendrás el reembolso de las sumas abonadas por la compra revocada.
        </p>
        <p>
        En caso de que desees cambiar un artículo, deberás contactarte con nuestro Departamento de Servicios al Cliente, enviando un mail a 'email' con los siguientes datos: número de pedido, motivo del cambio, producto a cambiar y el nuevo producto seleccionado para el cambio. De esta manera, será posible para nosotros coordinar las acciones necesarias para actuar con celeridad en la reposición del producto en cuestión, si corresponde.
        </p>
      </Modal.Body>
    </Modal.Dialog>
  )
}

export default Politicas;
