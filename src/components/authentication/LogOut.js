import * as React from 'react';
import '../../styles/components/LogOut.scss';

const LogOut = (props) => (
  <section className="logout">
    <a className="logout-link" onClick={ props.logout } >Log out</a>
  </section>
);

export default LogOut;