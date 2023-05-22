import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../Axios/axios";
import { datafailad, datasucess } from "../Action/User";
import { GETDATA } from "../Constant";

function* gethome() {
  try {
    const response = yield call(get,`/todos`);
    yield put(datasucess(response));
  } catch (error) {
    yield put(datafailad(error));
  }
}

function* saga() {
  yield takeLatest(GETDATA, gethome);
}

export default saga;
