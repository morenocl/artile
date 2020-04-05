import React from 'react';

import ContactoScreen from '../components/Contacto';
import EnvioScreen from '../components/Envio';
import Error from '../components/Error';
import NosotrosScreen from '../components/Nosotros';
import PoliticasScreen from '../components/Politicas';
import { contacto, datosEnvio } from '../res/Datos'

const Info = (props) => {
  const { type } = props;
  var ret = null;

  switch (type) {
    case 'contacto':
      ret = (<ContactoScreen data={contacto}/>)
      break;
    case 'envios':
      ret = (<EnvioScreen data={datosEnvio}/>)
      break;
    case 'info':
      ret = (<NosotrosScreen />)
      break;
    case 'politicas':
      ret = (<PoliticasScreen />)
      break;
    default:
      ret = (<Error message='page not found' />)
  }
  return(ret)
}

export default Info;
