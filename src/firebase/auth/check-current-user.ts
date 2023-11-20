import { FIREBASE_AUTH } from "../config";

export default function checkCurrentUser() {
  return FIREBASE_AUTH.currentUser;
}
