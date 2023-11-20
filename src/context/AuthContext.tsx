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
interface AuthContextType {
  loggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw Error("Auth Context is null");
  }
  return ctx;
};

interface AuthContextProviderProps extends PropsWithChildren {}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [fbAuth, setFbAuth] = useState<AuthContextType>({
    loggedIn: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFbAuth((prev) =>
        user ? { ...prev, loggedIn: true } : { ...prev, loggedIn: false },
      );
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={fbAuth}>{children}</AuthContext.Provider>;
}
