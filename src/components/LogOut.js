import * as React from 'react';
import { handleLogout } from '../actions/auth';

const LogOut = ({ handleLogout }) =>  (
  <section className="logout">
    <button onClick={ handleLogout } >Log out</button>
  </section>
);
export default LogOut;