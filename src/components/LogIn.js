import * as React from 'react';
import { handleLogin } from '../actions/auth';

const LogIn = ({ handleLogin }) =>  (
  <section className="login">
    <button onClick={ handleLogin } >Log in with Google</button>
  </section>
);
export default LogIn;