import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4JHZOazO2D21KbctqYBuRzGvUMGvBW08",
  authDomain: "aug2021lab1.firebaseapp.com",
  projectId: "aug2021lab1",
  storageBucket: "aug2021lab1.appspot.com",
  messagingSenderId: "499734192536",
  appId: "1:499734192536:web:4ed68444e44814ce9c8bed",
  measurementId: "G-S2BFM9R0V2",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
