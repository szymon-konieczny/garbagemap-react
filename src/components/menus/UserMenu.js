import * as React from 'react';
import '../../styles/components/UserMenu.scss';

const UserMenu = (props) => (
  <section className="user-menu">
    <div className="user-info">
      <img className="user-profile__image" src={ props.user.photoURL } />
      <div className="user-profile__name-wrapper">
        <p className="user-profile__name">{ props.user.displayName }</p>
        <p className="user-profile__email">{ props.user.email }</p>
      </div>
    </div>
    <a className="logout-link" onClick={ props.logout } >Log out</a>
  </section>
);

export default UserMenu;