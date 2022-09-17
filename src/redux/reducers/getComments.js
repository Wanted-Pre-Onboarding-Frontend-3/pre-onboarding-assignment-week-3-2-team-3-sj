import * as actionType from "../actions/type";

const initialState = {
  comments: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.GOT_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}
