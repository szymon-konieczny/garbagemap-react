import { firebase, googleAuthProvider } from '../firebase/firebase';

export const handleLogin = () => {
  return () => firebase.auth().signInWithPopup(googleAuthProvider);
};

export const handleLogout = () => {
  return () => firebase.auth().signOut();
};