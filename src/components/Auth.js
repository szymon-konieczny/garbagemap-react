import * as React from 'react';
import { firebase } from '../firebase/firebase';
import { handleLogin, handleLogout } from '../actions/auth';
import LogIn from './LogIn';
import LogOut from './LogOut';

const Auth = () => {
  const isAuth = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return user;
    } else {
     return false;
    }
  });
  return (
    <React.Fragment>
      { isAuth() ? <LogOut /> : <LogIn /> }
    </React.Fragment>
  )

}

export default Auth;