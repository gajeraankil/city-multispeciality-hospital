import { call, put, takeEvery, all } from "redux-saga/effects";
import * as ActionTypes from "../redux/ActionTypes";
import { signInApi, signUpApi, forgotPasswordApi, signOutApi, googleLoginApi } from "../common/authApi";
import { setAlert } from "../redux/action/alert.action";
import { history } from "../history";
import { signedInAction, signedOutAction } from "../redux/action/auth.action.js";

function* signUp(action) {
  try {
    const user = yield call(signUpApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }));
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
  }
}

function* signIn(action) {
  try {
    const user = yield call(signInApi, action.payload);
    yield put(signedInAction(user));
    yield put(setAlert({ text: "Login Successful.", color: "success" }));
    history.push("/");
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
  }
}

function* signOut() {
  try {
    const user = yield call(signOutApi);
    yield put(signedOutAction());
    yield put(setAlert({ text: user.payload, color: "success" }));
    history.push("/login");
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
  }
}

function* forgotPassword(action) {
  try {
    const user = yield call(forgotPasswordApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }));
    history.push("/");
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
  }
}

function* googleLogin() {
  try {
    const user = yield call(googleLoginApi);
    yield put(signedInAction(user.payload));
    yield put(setAlert({ text: "Login Successful.", color: "success" }));
    history.push("/");
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
    console.log(e);
  }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGN_IN, signIn);
}

function* watchSignOut() {
  yield takeEvery(ActionTypes.SIGN_OUT, signOut);
}

function* watchForgotPassword() {
  yield takeEvery(ActionTypes.FORGOT_PASSWORD, forgotPassword);
}

function* watchGoogleLogin() {
  yield takeEvery(ActionTypes.GOOGLE_LOGIN, googleLogin);
}

export function* authSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchForgotPassword(),
    watchGoogleLogin(),
  ]);
}
