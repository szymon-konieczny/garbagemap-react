import * as React from 'react';
import { NavLink } from 'react-router-dom';

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
    <ul className="user-menu__links">
      <li><NavLink to={`/user/${props.user.uid}`} activeClassName="user-menu__link--active" className="user-menu__link">Your account</NavLink></li>
      <li><a className="logout-link" onClick={ props.logout } >Log out</a></li>
    </ul>
  </section>
);

export default UserMenu;