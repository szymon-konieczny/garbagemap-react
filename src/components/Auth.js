import * as React from 'react';
// import { firebase } from '../firebase/firebase';
import LogIn from './LogIn';
import LogOut from './LogOut';

const Auth = () => {
  // const isAuth = () => firebase.auth().onAuthStateChanged(user => user);
  
  return (
    <React.Fragment>
      <LogOut /> 
      <LogIn /> 
    </React.Fragment>
  )
}

export default Auth;