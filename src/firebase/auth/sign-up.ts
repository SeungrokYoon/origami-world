import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../config";

export default async function signup(email: string, password: string) {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
