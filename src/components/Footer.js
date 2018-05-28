import * as React from 'react';
import '../styles/components/Footer.scss';

const Footer = (props) => (
  <div className="footer">
    <p>{ props.user && props.user } | 
    { props.currentLocationLat && <span> Current location: { props.currentLocationLat }, { props.currentLocationLng }</span> }
    </p>
  </div>
);
export default Footer;