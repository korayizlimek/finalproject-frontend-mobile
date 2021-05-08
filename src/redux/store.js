import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import {cartReducer} from './reducers/cartReducers';
import {
  getProductDetailsReducer,
  getProductsReducer,
} from './reducers/productReducers';
import {userReducer} from './reducers/userReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  user: userReducer,
});

const middleware = [thunk];

//Locale ekleme
const cartFromLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const userFromLocalStorage = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : [];

// const userrFromLocalStorage = localStorage
//! burada kaldim ve localStorage yada statet e user i ekleyiop orardan header a cekecegim

// INITIAL STATE i LOCAL SAYMA
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
  user: {
    user: userFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
