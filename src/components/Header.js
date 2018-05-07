import * as React from 'react';
import '../styles/components/Header.scss';
import moment from 'moment';

const Header = () =>  (
  <section className="header">
      { moment().format('DD/MM/YYYY, h:mm A') }
  </section>
);
export default Header;
