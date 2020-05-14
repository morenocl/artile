import React from 'react';
import { connect } from 'react-redux';

import ChangoScreen from '../components/Chango'
import {dispatchProd, dispatchUpdate, dispatchRemove} from '../containers/Cart.ducks'

export const mapStateToProps = (state, ownProps) => ({
  productos: state.Cart.productos,
});

export const mapDispatchToProps = ({
  setProd: dispatchProd,
  updateProd: dispatchUpdate,
  removeProd: dispatchRemove,
});

const Chango = (props) => {
  const {productos, updateProd, removeProd} = props;

  const enviarPedido = () => {
    let msj = 'Hola! Quiero hacer una compra:'
    productos.forEach((p, i) => {
      msj = msj + ' ' + p.cantidad + ' ' + p.title
      msj += i +1 < productos.length ? ',' : ''
    });
    msj += '.'
    let link = 'https://api.whatsapp.com/send?phone=543544609044&text=' + msj.replace(/\s+/g,'%20')
    window.open(link)
  }

  return (
    <ChangoScreen
      productos={productos}
      update={updateProd}
      remove={removeProd}
      enviarPedido={enviarPedido}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Chango);
