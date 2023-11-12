import FIREBASE_APP from "@/firebase/config";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(FIREBASE_APP);

export default async function signin(email: string, password: string) {
  let result = null;
  let error = null;
  try {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    error = e;
  }
  return { result, error };
}
