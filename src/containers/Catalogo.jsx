import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button'
import CatalogoScreen from '../components/Catalogo'
import OfertasScreen from '../components/Ofertas'
import { productos, ofertas } from '../res/Datos'
import {dispatchProd} from '../containers/Cart.ducks'


export const mapDispatchToProps = ({
  setProd: dispatchProd,
});

const Catalogo = (props) => {
  const { setProd } = props;

  const categ = {
    guagua:{title:"Artile Guagua", key:"guagua" , elems:[],},
    natural:{title:"Artile Natural", key:"natural" , elems:[],},
    textil:{title:"Artile Textil", key:"textil" , elems:[],},
    kutxa:{title:"Artile Kutxa", key:"kutxa" , elems:[],},
  };

  productos.forEach(dato => categ[dato.categ].elems.push(dato));

  return(
    props.type === 'ofertas' ?
      <OfertasScreen
        data={ofertas}
        agregar={setProd}
      />
      :
      <CatalogoScreen
        categ={categ}
        setProd={setProd}
      />
  );
}

export default connect(null, mapDispatchToProps)(Catalogo)
