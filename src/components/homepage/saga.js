import { LOGIN_REQUEST, loginSuccess, loginFailed } from "./action";

import { login } from "../../api/LoginApi";
import { call, put, takeLatest } from "redux-saga/effects";

function* loginRequest(action) {
  console.log("saga check", action);
  const { payload, error } = yield call(login.loginApi, action);
  console.log("payload at saga", payload);
  if (payload) {
    yield put(loginSuccess(payload));
  } else {
    yield put(loginFailed(error));
  }
}

export const loginSaga = [takeLatest(LOGIN_REQUEST, loginRequest)];
