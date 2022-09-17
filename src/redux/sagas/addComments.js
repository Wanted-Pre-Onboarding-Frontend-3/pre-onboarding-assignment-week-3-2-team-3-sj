import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/type";
import { Api } from "../../api";


export default function* addCommentsSaga() {
  yield takeEvery(actionType.ADD_COMMENT, addComments);
}

function* addComments(action) {
  try {
    yield call(()=> Api.addComments.request(action.payload));
    yield put({ type: actionType.ADDED_COMMENT });
  } catch (err) {
    console.error(err);
  }
}