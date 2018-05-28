import * as React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';
import '../styles/components/Auth.scss';

const Auth = (props) => (
  <React.Fragment className="auth-wrapper">
    { props.user ?
      <LogOut 
        logout={ props.logout } 
      /> 
      :
      <LogIn 
        loginGoogle={ props.loginGoogle } 
      /> 
    }
  </React.Fragment>
);

export default Auth;