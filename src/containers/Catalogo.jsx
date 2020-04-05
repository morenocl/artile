import React from 'react';

import CatalogoScreen from '../components/Catalogo'
import OfertasScreen from '../components/Ofertas'
import { productos, ofertas } from '../res/Datos'

const Catalogo = (props) => {

  return(
    props.type === 'ofertas' ?
      <OfertasScreen data={ofertas}/>
      :
      <CatalogoScreen data={productos}/>
  );
}

export default Catalogo;
