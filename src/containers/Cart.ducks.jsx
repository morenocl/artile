import PropTypes from 'prop-types';

const SET_PROD = 'SET_PROD';
const REMOVE_PROD = 'REMOVE_PROD';
const UPDATE_PROD_QUANTITY = 'UPDATE_PROD_QUANTITY'

export const initialState = {
  productos: [],
}

export const dispatchProd = (prod) => ({
  type: SET_PROD,
  payload: prod,
})

export const dispatchRemove = (prod) => ({
  type: REMOVE_PROD,
  payload: prod,
})

export const dispatchUpdate = (n) => ({
  type: UPDATE_PROD_QUANTITY,
  payload: n,
})

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROD:{
      let index = state.productos.findIndex(x => x.id === payload.id);
      // Is the item user wants to add already in the cart?
      if (index !== -1) {
        // Yes, update the quantity.
        let cloneCartItems = [...state.productos];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          cantidad: state.productos[index].cantidad + action.payload.cantidad
        };
        return { ...state, productos: cloneCartItems };
      }
      // No, add a new item.
      return { ...state, productos: [...state.productos, payload] };
    }

    case REMOVE_PROD:
      return { ...state, productos: state.productos.filter(x => x.id !== action.payload.id)};

    case UPDATE_PROD_QUANTITY: {
      let index = state.productos.findIndex(x => x.id === action.payload.id);
      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.productos];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          cantidad: state.productos[index].cantidad + action.payload.cantidad
        };
        if(cloneCartItems[index].cantidad === 0) cloneCartItems.splice(index, 1)  // elimina uno desde index.
        return { ...state, productos: cloneCartItems };
      }
      // If we couldn't find such item, do nothing.
      return state;
    }

    default:
      console.log('duck en default.')
      return state;
  }
}

export default reducer;
