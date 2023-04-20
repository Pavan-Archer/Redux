import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_PROP,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./action";

const initialState = {
  vehicleResult: [],
  loading: false,
  error: undefined,
  loginResult: [],
  setAfterLogin: false,
};

export default function loginReducer(state = initialState, action) {
  // console.log(action);
  switch ((action, action.type)) {

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        loginResult: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_PROP:
      return {
        ...state,
        setAfterLogin: action.payload,
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        vehicleResult: action.payload,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
