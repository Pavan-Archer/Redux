export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginRequest = (loginname, password) => {
  console.log("check request", loginname, password);
  return {
    type: LOGIN_REQUEST,
    loginname: loginname,
    password: password,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
