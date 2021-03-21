import firebaseClient from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config/firebase";

if (typeof window !== "undefined" && firebaseClient.apps.length === 0) {
  firebaseClient.initializeApp(firebaseConfig);
}

export default firebaseClient;
