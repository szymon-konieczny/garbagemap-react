import { firebase, googleAuthProvider } from '../firebase/firebase';

const handleLogin = () => firebase.auth().signInWithPopup(googleAuthProvider);
const handleLogout = () => firebase.auth().signOut();

export { handleLogin, handleLogout };