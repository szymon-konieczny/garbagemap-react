import * as React from 'react';
import { BrowserRouter, browserHistory, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import GarbageList from '../components/GarbageList';
import MapContainer from '../components/pages/MapContainer';
import AboutPage from '../components/pages/AboutPage';
import UserPage from '../components/pages/UserPage';
import ContactPage from '../components/pages/ContactPage';
import Footer from '../components/Footer';

import '../styles/components/AppRouter.scss';

const AppRouter = (props) => (
  <BrowserRouter basename={ process.env.PUBLIC_URL }  history={ browserHistory } >
    <div className="router-wrapper">
      <Header 
        user={ props.user }
        loginGoogle={ props.loginGoogle } 
        logout={ props.logout }
      />
      <div className="map-wrapper">
        <Switch>
          <Route path="/"
            render={ () => <MapContainer 
              user={ props.user }
              currentLocationLat={ props.currentLocationLat } 
              currentLocationLng={ props.currentLocationLng } /> } 
            exact={ true } 
          />
          <Route path="/about"
            render={ () => <AboutPage /> } 
          />
          <Route path="/user/:id"
            render={ () => <UserPage user={ props.user } /> } 
          />
          <Route path="user/list"
            render={ () => <GarbageList 
              currentLocationLat={ props.currentLocationLat } 
              currentLocationLng={ props.currentLocationLng } /> } 
          />
          <Route path="/contact"
            render={ () => <ContactPage /> } 
          />
        </Switch>
      </div>
      <Footer 
        user={ props.user }
        currentLocationLat={ props.currentLocationLat } 
        currentLocationLng={ props.currentLocationLng } 
      />
    </div>
  </BrowserRouter>
)
export default AppRouter;