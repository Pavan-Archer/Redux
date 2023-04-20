import { all } from "redux-saga/effects";
import { loginSaga, vehicleDataSaga } from "./components/homepage/saga";

function* rootSaga() {
  yield all([...loginSaga, ...vehicleDataSaga]);
}

export default rootSaga;
