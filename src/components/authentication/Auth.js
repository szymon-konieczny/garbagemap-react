import * as React from 'react';
import { expandMenu } from '../../actions/menu';
import LogIn from './LogIn';
import LogOut from './LogOut';

import '../../styles/components/Auth.scss';

const Auth = (props) => {
  const toggler = document.querySelector('.toggle-link');
  const toExpand = document.querySelector('.account-menu__expanded');

  expandMenu(toggler, toExpand);
  
  return (
    <div className="auth-wrapper">
      <div className="account-menu">
        <a className="toggle-link" href="#">Log in <span className="toggler"></span></a>
      </div>
      <div className="account-menu__expanded hidden">
      { props.user ?
        <LogOut 
          logout={ props.logout } 
        /> 
        :
        <LogIn 
          loginGoogle={ props.loginGoogle } 
        /> 
      }
      </div>
    </div>
  );
};
export default Auth;