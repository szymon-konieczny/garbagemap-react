import * as React from 'react';
import Header from './components/Header';
import AppRouter from './routers/AppRouter';
import Footer from './components/Footer';
import { geolocated } from 'react-geolocated';

class App extends React.Component {
  
  state = {
    currentLocation: {
      lat: null,
      lng: null
    }
  };

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    currentLocation: {
      lat: nextProps.coords && nextProps.coords.latitude,
      lng: nextProps.coords && nextProps.coords.longitude 
    }
  });

  render() {
    return (
      <React.Fragment>
        <AppRouter 
          currentLocationLat={ this.state.currentLocation.lat } 
          currentLocationLng={ this.state.currentLocation.lng }
        />
        <Footer 
          currentLocationLat={ this.state.currentLocation.lat } 
          currentLocationLng={ this.state.currentLocation.lng } 
        />
      </React.Fragment>
    );
  }
}

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
})(App);
