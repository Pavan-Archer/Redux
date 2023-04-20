export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const LOGIN_PROP = "LOGIN_PROP";

//Action creator
export const loginRequest = (loginname, password) => {
  ;
  return {
    type: LOGIN_REQUEST,
    loginname: loginname,
    password: password,
  };
};

//Action creator
export const loginSuccess = (data) => {
  // console.log(data)
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

//Action creator
export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

export const loginProp = (setAfterLogin ) => {
  return {
    type: LOGIN_PROP,
    payload: setAfterLogin,
  };
};

export const fetchDataRequest = (ClientId, UserId) => ({
  type: FETCH_DATA_REQUEST,
  ClientId: ClientId,
  UserId: UserId,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
