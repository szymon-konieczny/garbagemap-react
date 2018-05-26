import * as React from 'react';
import { BrowserRouter, browserHistory, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

import MapContainer from '../components/pages/MapContainer';
import AboutPage from '../components/pages/AboutPage';
import GarbageList from '../components/pages/GarbageList';
import ContactPage from '../components/pages/ContactPage';

const AppRouter = (props) => (
  <React.Fragment>
    <BrowserRouter basename={ process.env.PUBLIC_URL }  history={ browserHistory } >
      <div>
        <Header />
        <Switch>
          <Route path="/"
            render={ () => <MapContainer 
              currentLocationLat={ props.currentLocationLat } 
              currentLocationLng={ props.currentLocationLng } /> } 
            exact={ true } 
          />
          <Route path="/about"
            render={ () => <AboutPage /> } 
          />
          <Route path="/list"
            render={ () => <GarbageList 
              currentLocationLat={ props.currentLocationLat } 
              currentLocationLng={ props.currentLocationLng } /> } 
          />
          <Route path="/contact"
            render={ () => <ContactPage /> } 
          />
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>
)
export default AppRouter;