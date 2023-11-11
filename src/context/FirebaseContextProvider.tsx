"use client";

import FIREBASE_APP from "@/firebase/config";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const auth = getAuth(FIREBASE_APP);

const FirebaseAuthContext = createContext<User | null>(null);

export const useFireBaseAuthContext = () => {
  const ctx = useContext(FirebaseAuthContext);
  if (!ctx) {
    throw Error("Firebase Auth Context is null");
  }
  return ctx;
};

interface FirebaseContextProviderProps extends PropsWithChildren {}

export function FirebaseContextProvider({
  children,
}: FirebaseContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
