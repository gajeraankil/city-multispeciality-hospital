import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

export const signUpApi = (data) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          sendEmailVerification(user).then(() => {
            resolve({ payload: "Please varify your email" });
          });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject({ payload: "Email is already in use" });
        } else {
          reject({ payload: errorMessage });
        }
      });
  });
};

export const signInApi = (data) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          resolve({ payload: user });
        } else {
          reject({ payload: "Please varify your email first" });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/wrong-password") === 0 || errorCode.localeCompare("auth/user-not-found") === 0) {
          reject({ payload: "Email or Password wrong" });
        } else {
          reject({ payload: errorMessage });
        }
      });
  });
};

export const signOutApi = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: "Logout Successful" });
      })
      .catch((error) => {
        reject({ payload: error });
      });
  });
};

export const forgotPasswordApi = (data) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        resolve({ payload: "Please check your email to reset password" });
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject({ payload: errorMessage });
      });
  });
};

export const googleLoginApi = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        resolve({ payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject({ payload: errorMessage });
      });
  });
};
