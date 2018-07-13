import * as React from 'react';
import LogIn from './LogIn';
import UserMenu from '../menus/UserMenu';

import '../../styles/components/Auth.scss';

export default class Auth extends React.Component {

  state = {
    showUserMenu: false
  };

  toggleUserMenu = () => {
    this.setState(prevState => ({
      showUserMenu: !prevState.showUserMenu
    }));
  };

  handleUserMenuClose = () => {
    this.setState({
      showUserMenu: false
    });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="account-menu">
          <button tabIndex="4" onMouseDown={ this.toggleUserMenu } className="toggle-btn">
          { this.props.user ? 'Dashboard' : 'Log in' } 
            <span className="toggler" />
          </button>
        </div>
        { this.state.showUserMenu && (
            <div className="account-menu__expanded">
            { this.props.user
              ? <UserMenu
                  handleClose={ this.handleUserMenuClose }
                  user={ this.props.user } 
                  logout={ this.props.logout } 
                /> 
              : <LogIn
                  handleClose={ this.handleUserMenuClose } 
                  loginGoogle={ this.props.loginGoogle } 
                /> 
            }
            </div>
          )}  
      </div>
    );
  };
};