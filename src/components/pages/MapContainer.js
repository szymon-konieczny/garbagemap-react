import * as React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GarbageTypeSpotter from '../GarbageTypeSpotter';

import '../../styles/components/MapContainer.scss';
import type from '../../data/garbageTypes';
import markers from '../../data/markers';

class MapContainer extends React.Component {
  
  getGarbagesFromLocalStorage = () => {
    const garbagesJSON = localStorage.getItem('garbageList');
    const garbages = JSON.parse(garbagesJSON);
    return garbages;
  };

  markerColor = (type) => {
    switch (type) {
      case 'tires':
        return 'black'
        break;
      case 'illegal':
        return 'orange'
        break;
      case 'hazardous':
        return 'red'
        break;
      case 'other':
        return 'purple'
        break;
      default:
        return 'white'
    };
  };
  
  render() {
    return (
      <React.Fragment>
        <GarbageTypeSpotter 
          currentLocationLat={ this.props.currentLocationLat } 
          currentLocationLng={ this.props.currentLocationLng } 
        />
        <Map 
          className="map-container"
          google={ this.props.google }
          initialCenter={{ 
            lat: 42.0981495,
            lng: 14.1433417
           }}
          zoom={ 18 }
          center={{ 
            lat: this.props.currentLocationLat,
            lng: this.props.currentLocationLng
          }}
        >
      
        { console.log(this.props.currentLocationLat, this.props.currentLocationLng) }
        
        <Marker 
          title="Current location"
          icon={{
            path: this.props.google.maps.SymbolPath.CIRCLE,
            scale: 5.5,
            fillColor: "00B2FF",
            fillOpacity: 1,
            strokeColor: 'white',
            strokeWeight: 3.5,
            strokeOpacity: 0.5
          }}
          position={{lat: this.props.currentLocationLat, lng: this.props.currentLocationLng}} 
          draggable={ false }
        />
        { this.getGarbagesFromLocalStorage() && this.getGarbagesFromLocalStorage().map((marker, index) => 
          <Marker 
            key={ index } 
            title={ marker.title } 
            position={ marker.location } 
            icon={{
              path: this.props.google.maps.SymbolPath.CIRCLE,
              scale: 7.5,
              fillColor: this.markerColor(marker.type),
              fillOpacity: 0.95,
              strokeColor: 'white',
              strokeWeight: 0.6
            }}
          />) }
        </Map>
      </React.Fragment>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAivECeR4VCc4a19DC4cuwJc_IqFlyt5RU'
})(MapContainer);