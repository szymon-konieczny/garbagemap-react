import * as React from 'react';

const LogIn = (props) => (
  <section className="login">
    <button onClick={ props.login } >Log in with Google</button>
  </section>
);

export default LogIn;