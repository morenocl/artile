import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, type ContextRouter } from 'react-router'
//import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Catalogo from '../containers/Catalogo';
import Home from '../containers/Home';
import Info from '../containers/Info';
import Landing from '../components/Landing';
import Error from '../components/Error';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});


export const Routes = ({ auth }) => (
  <Switch>
    <Route
      path="/"
      exact
      render={(props: ContextRouter) => (<>
        <Home />
      </>)}
    />

    <Route
      path="/catalogo"
      exact
      render={(props: ContextRouter) => (<>
        <Catalogo type="productos"/>
      </>)}
    />

    <Route
      path="/contacto"
      exact
      render={(props: ContextRouter) => (<>
        <Info type='contacto' />
      </>)}
    />

    <Route
      path="/envios"
      exact
      render={(props: ContextRouter) => (<>
        <Info type='envios' />
      </>)}
    />

    <Route
      path="/nosotros"
      exact
      render={(props: ContextRouter) => (
        <Info type='info' />
      )}
    />

    <Route
      path="/ofertas"
      exact
      render={(props: ContextRouter) => (
        <Catalogo type='ofertas' />
      )}
    />

    <Route
      path="/politicas"
      exact
      render={(props: ContextRouter) => (
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
