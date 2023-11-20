import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import process from "process";

export const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

const FIREBASE_APP =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export default FIREBASE_APP;
