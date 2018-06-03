import * as React from 'react';
import { geolocated } from 'react-geolocated';
import { auth, firebase, googleAuthProvider } from './firebase/firebase';

import Header from './components/Header';
import AppRouter from './routers/AppRouter';

const setWatchPosition = user => user;

class App extends React.Component {
  
  state = {
    currentLocation: {
      lat: null,
      lng: null
    },
    user: null,
    userName: null
  };

  saveAuthUserToLocalStorage = (userName) => {
    localStorage.setItem('activeUser', username);
  }

  handleLoginGoogle = () => auth
    .signInWithPopup(googleAuthProvider)
    .then(result => {
        const user = result.user;
        const userName = user.displayName;
        this.setState({
            user,
            userName
        });

    });
  
  handleLogout = () => auth
    .signOut()
    .then(() => {
      this.setState({
        user: null,
        userName: null
      });
    });

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userName = user.displayName;
        this.setState({ user, userName });
        setWatchPosition(user);
      } 
    });
  }

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
          user={ this.state.user }
          loginGoogle={ this.handleLoginGoogle }
          logout={ this.handleLogout }
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
