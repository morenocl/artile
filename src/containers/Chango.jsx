import React from 'react';
import { connect } from 'react-redux';

import ChangoScreen from '../components/Chango'
import {dispatchProd, dispatchUpdate} from '../containers/Cart.ducks'

export const mapStateToProps = (state, ownProps) => ({
  productos: state.Cart.productos,
});

export const mapDispatchToProps = ({
  setProd: dispatchProd,
  updateProd: dispatchUpdate,
});

const Chango = (props) => {
  const {productos, updateProd} = props;

  return (
    <ChangoScreen
      productos={productos}
      update={updateProd}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Chango);
