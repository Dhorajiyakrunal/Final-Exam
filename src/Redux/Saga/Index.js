import { all, fork } from "redux-saga/effects";
import gethome from "../Saga/Rootsaga";

export default function* rootSaga() {
  yield all([fork(gethome)]);
}
