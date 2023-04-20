import { api } from "./api";

const loginApi = (action) => {
  const url = `https://uyenotest.infotracktelematics.com:5001/fms/v2/auth`;

  const body = {
    LoginName: action.loginname,
    LoginPwd: action.password,
  };
  return api
    ._post(url,body)
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

const vehicleDataApi = (action) => {
  const url = `https://uyenotest.infotracktelematics.com:5001/fms/v2/vehicle/dashboard`;

  const body = {
    ClientId: action.ClientId,
    UserId: action.UserId,
  };
  return api
    .post(url, body)
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
  loginApi, vehicleDataApi
};
