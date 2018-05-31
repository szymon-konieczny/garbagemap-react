import * as React from 'react';
import moment from 'moment';
import MainMenu from './menus/MainMenu';
import Auth from './authentication/Auth';

import '../styles/components/Header.scss';

const Header = (props) =>  (
  <section className="header">
    <MainMenu />
    <span className="time">{ moment().format('h:mm A') }</span>
    <Auth 
      user={ props.user }
      loginGoogle={ props.loginGoogle } 
      logout={ props.logout }
    />
  </section>
);
export default Header;
