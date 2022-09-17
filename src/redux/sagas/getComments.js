import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/type";
import { Api } from "../../api";

export default function* getPostsSaga() {
  yield takeEvery(actionType.GET_COMMENTS, fetchPosts);
}

function* fetchPosts() {
  try {
    const {data} = yield call(()=> Api.getManyComments.request());
    yield put({ type: actionType.GOT_COMMENTS, payload: data });
  } catch (err) {
    console.error(err);
  }
}