import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { cartReducer } from "./cartProducts/reducer";
import thunk from 'react-redux'

  export const rootReducer = combineReducers({
  cartProduct : cartReducer
  });

export const store = createStore(rootReducer, applyMiddleware(thunk));

