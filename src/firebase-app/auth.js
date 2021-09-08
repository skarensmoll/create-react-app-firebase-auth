import {signInWithRedirect,
  GoogleAuthProvider, signOut } from 'firebase/auth';
import {firebaseAuth} from 'firebase-app';


const provider = new GoogleAuthProvider();

const signWithGoogle = () => {
  signInWithRedirect(firebaseAuth, provider);
};

const logOut = () => {
  signOut(firebaseAuth)
}

export {
  signWithGoogle,
  logOut
}