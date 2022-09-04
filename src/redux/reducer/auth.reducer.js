import * as ActionTypes from "../ActionTypes";

const initVal = {
  isLoading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case ActionTypes.SIGNED_OUT:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
