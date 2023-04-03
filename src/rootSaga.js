import { all } from "redux-saga/effects";
import { loginSaga } from "./components/homepage/saga";

function* rootSaga() {
  yield all([...loginSaga]);
}

export default rootSaga;
