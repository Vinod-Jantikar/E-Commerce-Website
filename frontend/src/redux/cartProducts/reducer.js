import { CART_PRODUCT_LOADING, CART_PRODUCT_SUCCESS } from "./actions";

const initialState = {
  cartItems: [],
  loading: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_PRODUCT_SUCCESS:
      return { ...state, cartItems: [...action.payload], loading: false };
    case CART_PRODUCT_LOADING:
        return {...state, loading: true}
    default:
      return state
  }
};
