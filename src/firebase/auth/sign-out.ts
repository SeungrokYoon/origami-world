import { getAuth } from "firebase/auth";
import FIREBASE_APP from "../config";

const auth = getAuth(FIREBASE_APP);

export default function signOut() {
  auth.signOut();
}
