import * as firebaseAdmin from "firebase-admin";
import "firebase/auth";
import { firebaseConfig } from "../config/firebase";

if (firebaseAdmin.apps.length === 0) {
  firebaseAdmin.initializeApp(firebaseConfig);
}

export default firebaseAdmin;
