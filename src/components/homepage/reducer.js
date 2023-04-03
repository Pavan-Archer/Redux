import { LOGIN_REQUEST, LOGIN_FAILED, LOGIN_SUCCESS } from "./action";

const initialState = {
  loading: false,
  error: undefined,
  loginResult: [],
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResult: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
