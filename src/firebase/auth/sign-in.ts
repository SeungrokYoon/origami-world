import FIREBASE_APP from "@/firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(FIREBASE_APP);

export default async function signin(email: string, password: string) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
