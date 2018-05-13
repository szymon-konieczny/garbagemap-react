import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as MapContainer from '../components/pages/MapContainer';
import GarbageList from '../components/pages/GarbageList';

const AppRouter = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={ (props) => <MapContainer { ...props } /> } exact={ true }/>
        <Route path="/list" render={ (props) => <GarbageList { ...props } /> } />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)
export default AppRouter;