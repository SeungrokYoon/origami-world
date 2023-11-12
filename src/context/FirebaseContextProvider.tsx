"use client";

import FIREBASE_APP from "@/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const auth = getAuth(FIREBASE_APP);
interface FirebaseAuthContextType {
  loggedIn: boolean;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextType | null>(null);

export const useFireBaseAuthContext = () => {
  const ctx = useContext(FirebaseAuthContext);
  if (ctx === null) {
    throw Error("Firebase Auth Context is null");
  }
  return ctx;
};

interface FirebaseContextProviderProps extends PropsWithChildren {}

export function FirebaseContextProvider({
  children,
}: FirebaseContextProviderProps) {
  const [fbAuth, setFbAuth] = useState<FirebaseAuthContextType>({
    loggedIn: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("auth changed");
      setFbAuth((prev) =>
        user ? { ...prev, loggedIn: true } : { ...prev, loggedIn: false },
      );
    });
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={fbAuth}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
