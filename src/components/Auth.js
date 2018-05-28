import * as React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';

const Auth = (props) => (
  <React.Fragment>
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