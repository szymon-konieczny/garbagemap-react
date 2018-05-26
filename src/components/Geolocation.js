import * as React from 'react';

class Geolocation extends React.Component {
  setCurrentLocationState = (props) => {
    const lat = this.props.coords.latitude;
    const lng = this.props.coords.longitude;
  
    return this.props.currentLocation(lat, lng);
  }

  componentDidUpdate = (props) => {
    console.log('Geolocation component here!', this.props.coords.latitude); 
  }

  render() {
    this.setCurrentLocationState;
    return (
      <React.Fragment>
      <h1>{ this.props.currentLocation }</h1>
      </React.Fragment>
    )
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
},
watchPosition: true,
userDecisionTimeout: null,
suppressLocationOnMount: false,
geolocationProvider: navigator.geolocation
})(Geolocation);
