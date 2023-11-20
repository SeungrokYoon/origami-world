import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../config";

export default async function signin(email: string, password: string) {
  let result = null;
  let error = null;
  try {
    setPersistence(FIREBASE_AUTH, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    error = e;
  }
  return { result, error };
}
