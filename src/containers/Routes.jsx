import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, ContextRouter } from 'react-router'
//import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Catalogo from '../containers/Catalogo';
import Chango from '../containers/Chango';
import Configuracion from '../containers/Configuracion';
import Home from '../containers/Home';
import Info from '../containers/Info';
import Error from '../components/Error';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});


export const Routes = ({ auth }) => (
  <Switch>
    <Route
      path="/"
      exact
      render={ContextRouter => (<>
        <Home />
      </>)}
    />

    <Route
      path="/catalogo"
      exact
      render={ContextRouter => (<>
        <Catalogo type="productos"/>
      </>)}
    />

    <Route
      path="/compra"
      exact
      render={ContextRouter => (<>
        <Chango />
      </>)}
    />

    <Route
      path="/configuracion"
      exact
      render={ContextRouter => (<>
        <Configuracion />
      </>)}
    />

    <Route
      path="/contacto"
      exact
      render={ContextRouter => (<>
        <Info type='contacto' />
      </>)}
    />

    <Route
      path="/envios"
      exact
      render={ContextRouter => (<>
        <Info type='envios' />
      </>)}
    />

    <Route
      path="/nosotros"
      exact
      render={ContextRouter => (
        <Info type='info' />
      )}
    />

    <Route
      path="/ofertas"
      exact
      render={ContextRouter => (
        <Catalogo type='ofertas' />
      )}
    />

    <Route
      path="/politicas"
      exact
      render={ContextRouter => (
        <Info type='politicas' />
      )}
    />

    {/* Default. */}
    <Route>
      <Error message="Page not found" />
    </Route>
  </Switch>);

export default connect(mapStateToProps)(Routes);



Routes.propTypes = {
  auth: PropTypes.bool.isRequired,
};
