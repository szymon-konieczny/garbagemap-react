import * as React from 'react';
import '../styles/components/Footer.scss';

const Footer = (props) => (
  <div className="footer">
    <p>&copy; Szymon Konieczny | 
    { props.currentLocationLat && <span> Current location: { props.currentLocationLat }, { props.currentLocationLng }</span> }
    </p>
  </div>
);
export default Footer;