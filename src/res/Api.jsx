//export const path = process.env.REACT_APP_PATH || 'http://localhost:8000';
export const path = 'http://127.0.0.1:8000/art';

export const request = (url, opts, onSuccess, onFailure) => {
  const body = {
    ...opts,
    headers:{'Content-Type': 'application/json'},
    mode: 'cors',
  };
  // Add headers.
//  if (!options.headers) options.headers = {};
  // Always use json.
//  options.headers['Content-Type'] = 'application/json';
  // Add token if logged in.
  const token = "getToken()";
//  if (token) options.headers.Authorization = `Token ${token}`;
  console.log(JSON.stringify(body));
  fetch(url, {body})
    .then((r) => {
      if (!r.ok) throw Error(r.statusText);
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
//  fetch(url, options);
};

export const getInicio = (onSuccess, onFailure) => {
  const url = `${path}/`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const getOfertas = (onSuccess, onFailure) => {
  const url = `${path}/ofertas`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const getCatalogo = (onSuccess, onFailure) => {
  const url = `${path}/catalogo`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const getNosotros = (onSuccess, onFailure) => {
  const url = `${path}/nosotros`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const getPoliticas = (onSuccess, onFailure) => {
  const url = `${path}/politicas`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const getEnvios = (onSuccess, onFailure) => {
  const url = `${path}/envios`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const login = (username, password, onSuccess, onFailure) => {
  const url = `${path}/login/`;
  const data = { user: username, pass: password };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  request(url, options, onSuccess, onFailure);
};

export const postProducto = (data, onSuccess, onFailure) => {
  const url = `${path}/productos`;
  const body = {
    method: 'POST',
    body: data,
  };
  request(url, body, onSuccess, onFailure);
}
