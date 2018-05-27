import * as React from 'react';

const LogOut = (props) => (
  <section className="logout">
    <button onClick={ props.logout } >Log out</button>
  </section>
);

export default LogOut;