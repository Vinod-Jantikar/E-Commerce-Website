import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actions";

const initialState = {
  loading: false,
  token: "",
  user: {},
  error: false,
  userId: "",
};

export const logInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: { ...payload.user },
        userId: payload.userId,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        token: "",
        error: false,
        user: null,
      };

    default:
      return state;
  }
};
