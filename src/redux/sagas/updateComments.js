import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/type";
import { Api } from "../../api";


export default function* updateCommentsSaga() {
  yield takeEvery(actionType.UPDATE_COMMENT, updateComments);
}

function* updateComments(action) {
  try {
    yield call(()=> Api.updateComments.request({id: action.id}, action.payload));
    yield put({ type: actionType.UPDATED_COMMENT });
  } catch (err) {
    console.error(err);
  }
}