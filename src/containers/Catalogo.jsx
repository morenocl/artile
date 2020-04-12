import React from 'react';

import CatalogoScreen from '../components/Catalogo'
import OfertasScreen from '../components/Ofertas'
import { productos, ofertas } from '../res/Datos'


const Catalogo = (props) => {

  const categ = {
    guagua:{title:"Artile Guagua", key:"guagua" , elems:[],},
    natural:{title:"Artile Natural", key:"natural" , elems:[],},
    textil:{title:"Artile Textil", key:"textil" , elems:[],},
    kutxa:{title:"Artile Kutxa", key:"kutxa" , elems:[],},
  };

  productos.forEach(dato => categ[dato.categ].elems.push(dato));



  return(
    props.type === 'ofertas' ?
      <OfertasScreen data={ofertas}/>
      :
      <CatalogoScreen categ={categ} />
  );
}

export default Catalogo;
