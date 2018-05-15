import * as React from 'react';
import moment from 'moment';
import MainMenu from './MainMenu';

import '../styles/components/Header.scss';

const Header = () =>  (
  <section className="header">
    <MainMenu />
    <span className="time">{ moment().format('h:mm A') }</span>
  </section>
);
export default Header;
