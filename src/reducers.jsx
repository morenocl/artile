import { combineReducers } from 'redux';

import Auth from './containers/Auth.ducks';
import Cart from './containers/Cart.ducks';

export default combineReducers({
  Auth,
  Cart,
});
