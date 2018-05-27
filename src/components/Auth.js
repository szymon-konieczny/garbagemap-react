import * as React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';

const Auth = (props) => (
  <React.Fragment>
    <LogOut logout={ props.logout } /> 
    <LogIn login={ props.login } /> 
  </React.Fragment>
);

export default Auth;