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

  return (
    <ChangoScreen
      productos={productos}
      update={updateProd}
      remove={removeProd}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Chango);
