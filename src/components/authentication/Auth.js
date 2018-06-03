import * as React from 'react';
import { expandMenu } from '../../actions/menu';
import LogIn from './LogIn';
import UserMenu from '../menus/UserMenu';

import '../../styles/components/Auth.scss';

const toggleLink = React.createRef();
const accountMenuExpanded = React.createRef();

const Auth = (props) => {

  const toggleLinkRef = toggleLink.current;
  const accountMenuExpandedRef = accountMenuExpanded.current;

  expandMenu(toggleLinkRef, accountMenuExpandedRef);
  
  return (
    <div className="auth-wrapper">
      <div className="account-menu">
        <a ref={ toggleLink } className="toggle-link" href="#">{ props.user ? 'Dashboard' : 'Log in' } <span className="toggler"></span></a>
      </div>
      <div ref={ accountMenuExpanded } className="account-menu__expanded hidden">
      { props.user ?
        <UserMenu
          user={ props.user } 
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