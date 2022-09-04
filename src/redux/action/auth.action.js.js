import * as ActionTypes from "../ActionTypes";

export const signupAction = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_UP, payload: data });
};

export const signInAction = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_IN, payload: data });
};

export const signedInAction = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGNED_IN, payload: data });
};

export const signOutAction = () => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_OUT });
};

export const signedOutAction = () => (dispatch) => {
  dispatch({ type: ActionTypes.SIGNED_OUT });
};

export const forgotPasswordAction = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.FORGOT_PASSWORD, payload: data });
};

export const googleLoginAction = () => (dispatch) => {
  dispatch({ type: ActionTypes.GOOGLE_LOGIN });
}