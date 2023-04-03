import { api } from "./api";

const loginApi = (action) => {
  const url = `http://localhost:5000/fms/v2/auth`;
  const body = {
    LoginName: action.loginname,
    LoginPwd: action.password,
  };
  return api
    ._post(url, body)
    .then((response) => {
      const payload = response.data;
      return {
        payload,
      };
    })
    .catch((error) => {
      return {
        error,
      };
    });
};

export const login = {
  loginApi,
};
