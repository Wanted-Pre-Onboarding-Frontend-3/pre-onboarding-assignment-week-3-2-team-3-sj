import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from "./type";

export const getComment = () => {
  return {
    type: GET_COMMENTS,
  };
};
export const addComment = (data) => {
  return {
    type: ADD_COMMENT, payload: data
  };
};
export const updateComment = (data) => {
  return {
    type: UPDATE_COMMENT, payload: data
  };
};
export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT, payload: id
  };
};