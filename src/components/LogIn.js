import * as React from 'react';
import { handleLogin } from '../actions/auth';

const LogIn = () => (
  <section className="login">
    <button onClick={ handleLogin } >Log in with Google</button>
  </section>
);
export default LogIn;