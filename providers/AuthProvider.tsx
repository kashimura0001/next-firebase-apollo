import React, { createContext, ReactNode, useEffect, useState } from "react";
import firebaseClient from "../lib/firebaseClient";
import nookies from "nookies";

type AuthContextType = {
  loading: boolean;
  user: firebaseClient.User | null;
  signInEmail: (email: string, password: string) => void;
  signUpEmail: (email: string, password: string) => void;
  signOut: () => void;
};

export const authContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    return firebaseClient.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken();
        nookies.set(undefined, "token", token, { path: "/" });
      } else {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  const signInEmail = async (email: string, password: string) => {
    await firebaseClient.auth().signInWithEmailAndPassword(email, password);
  };

  const signUpEmail = async (email: string, password: string) => {
    await firebaseClient.auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = async () => {
    await firebaseClient.auth().signOut();
  };

  const useProvideAuth = {
    loading,
    user,
    signInEmail,
    signUpEmail,
    signOut,
  };

  return (
    <authContext.Provider value={useProvideAuth}>
      {children}
    </authContext.Provider>
  );
};
