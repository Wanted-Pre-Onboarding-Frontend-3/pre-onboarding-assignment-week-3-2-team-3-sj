import * as actionType from "../actions/type";

const initialState = {
  comments: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.DELETED_COMMENT: {
      return {
        ...state,
        comments: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
