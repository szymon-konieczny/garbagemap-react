import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MapContainer from '../components/pages/MapContainer';
import GarbageList from '../components/pages/GarbageList';

const AppRouter = (props) => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" 
          render={ () => <MapContainer 
            currentLocationLat={ props.currentLocationLat } 
            currentLocationLng={ props.currentLocationLng } /> } 
          exact={ true } 
        />
        <Route path="/list" 
          render={ () => <GarbageList 
            currentLocationLat={ props.currentLocationLat } 
            currentLocationLng={ props.currentLocationLng } /> } 
        />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)
export default AppRouter;