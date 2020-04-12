import React from 'react'
import { useForm } from 'react-hook-form';

import { postProducto } from '../res/Api'


const  Configuracion = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    const body = JSON.stringify(data);
    var misCabeceras = new Headers({'Content-Type': 'application/json'});
    var miInit = {method: 'POST', mode: 'cors', cache: 'default', headers: misCabeceras, body};
    console.log(miInit);
    fetch('http://127.0.0.1:8000/art/productos', miInit);
  }

  const onSubmit2 = (data) => {
    const body = JSON.stringify(data);
    var misCabeceras = new Headers({'Content-Type': 'application/json'});
    var miInit = {method: 'POST', mode: 'cors', cache: 'default', headers: misCabeceras, body};
    console.log(miInit);
    fetch('http://127.0.0.1:8000/art/ofertas', miInit);
  }

  const producto = (
    <>
      <h3>Nuevo producto:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" ref={register} placeholder="Nombre Producto"/> {/* register an input */}
        <input name="text" ref={register({ required: true })} placeholder="Descripcion" />
        {errors.lastname && 'Last name is required.'}
        <input name="categ" ref={register({ required: true })} placeholder="categoria" />
        <input name="filter" ref={register({ required: true })} placeholder="subcategoria" />
        <input name="price" ref={register({ pattern: /\d+/ })} placeholder="precio" />
        {errors.age && 'Please enter number for age.'}
        <input type="submit" />
      </form>
      <h3>Nueva oferta:</h3>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <input name="name" ref={register} placeholder="Nombre Oferta"/> {/* register an input */}
        <input name="descrip" ref={register} placeholder="descripcion"/> {/* register an input */}
        <input name="price" ref={register({ pattern: /\d+/ })} placeholder="precio" />
        <input name="prod1" ref={register} placeholder="producto 1" />
        <input name="prod2" ref={register} placeholder="producto 2" />
        <input name="prod3" ref={register} placeholder="producto 3" />
        <input name="prod4" ref={register} placeholder="producto 4" />
        <input type="submit" />
      </form>
    </>
  );

  return(
    <>
      <h1>Configuraciones</h1>
      {producto}
    </>
  )
}

export default Configuracion;
