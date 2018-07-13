import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import '../../styles/components/LogIn.scss';

const LogIn = (props) => (
  <OutsideClickHandler onOutsideClick={ props.handleClose } >
    <section className="login">
      <form className="login-form">
        <label className="login-form__label">
          login: <input className="input login-email" type="text" placeholder="e-mail" disabled="disabled" />
        </label>
        <label className="login-form__label">
          pass: <input className="input login-pass" type="password" placeholder="password" disabled="disabled" />
        </label>
        <div className="login-links">
          <a href="#" className="login-submit-btn" disabled="disabled">Log in</a>
          <a href="#" className="register-submit-btn" disabled="disabled">Sign up</a>
        </div>
      </form>
      <a className="login-link google" onClick={ props.loginGoogle }></a>
    </section>
  </OutsideClickHandler>
);

export default LogIn;