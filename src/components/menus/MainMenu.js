import * as React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/MainMenu.scss';

const MainMenu = () => (
  <nav>
    <div className="main-menu__mobile-toggle"></div>
    <ul className="main-menu">
      <li><NavLink tabIndex="1" to="/" activeClassName="is-active" exact={true} className="main-menu__item">Home</NavLink></li>
      <li><NavLink tabIndex="2" to="/about" activeClassName="is-active" className="main-menu__item">About the project</NavLink></li>
      <li><NavLink tabIndex="3" to="/contact" activeClassName="is-active" className="main-menu__item">Contact</NavLink></li>
    </ul>
  </nav>
);
export default MainMenu;