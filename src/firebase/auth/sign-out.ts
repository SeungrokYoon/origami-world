import { FIREBASE_AUTH } from "../config";

export default function signOut() {
  FIREBASE_AUTH.signOut();
}
