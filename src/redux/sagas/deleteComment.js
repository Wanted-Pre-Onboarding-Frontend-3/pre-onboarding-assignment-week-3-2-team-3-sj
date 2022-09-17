import { call, put, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/type";
import { Api } from "../../api";

export default function* deleteCommentSaga() {
  yield takeEvery(actionType.DELETE_COMMENT, deleteComments);
}

function* deleteComments(action) {
  try {
    console.log(action);
    yield call(() => Api.deleteComments.request({id: action.id}));
    yield put({type: actionType.DELETED_COMMENT});
  } catch (err) {
    console.error(err);
  }
}