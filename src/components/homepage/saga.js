import { LOGIN_REQUEST, loginSuccess, loginFailed, fetchDataSuccess, fetchDataFailure } from "./action";
import { FETCH_DATA_REQUEST } from "./action";

import { login } from "../../api/LoginApi";
import { call, put, takeLatest } from "redux-saga/effects";

function* loginRequest(action) {
  // console.log("saga check", action);
  const { payload, error } = yield call(login.loginApi, action);
  console.log("payload at saga", payload);
  if (payload) {
    yield put(loginSuccess(payload));
  } else {
    yield put(loginFailed(error));
  }
}

function* vehicleData(action) {
  // console.log("action",action);
  const { payload, error } = yield call(login.vehicleDataApi, action);
  if (payload) {
    yield put(fetchDataSuccess(payload));
  } else {
    yield put(fetchDataFailure(error));
  }
}

export const loginSaga = [takeLatest(LOGIN_REQUEST, loginRequest)];
export const vehicleDataSaga = [takeLatest(FETCH_DATA_REQUEST, vehicleData)];
