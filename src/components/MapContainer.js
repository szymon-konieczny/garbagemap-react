import * as React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../styles/components/MapContainer.scss';
import type from '../data/garbageTypes';
import markers from '../data/markers';

export class MapContainer extends React.Component {
  getGarbagesFromLocalStorage = () => {
    const garbagesJSON = localStorage.getItem('garbageList');
    const garbages = JSON.parse(garbagesJSON);
    return garbages;
  }
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
        return 'violet'
        break;
      default:
        return 'white'
    }
  }
  render() {
    return (
      <React.Fragment>
        <Map 
          className="map-container"
          google={ this.props.google }
          initialCenter={{ 
            lat: 42.0981495,
            lng: 4.1433417
           }}
          zoom={ 14 }
          center={{ 
            lat: this.props.currentLocationLat,
            lng: this.props.currentLocationLng
          }}
        >

        { console.log(this.props.currentLocationLat, this.props.currentLocationLng) }
        
        <Marker 
          title="Current location"
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5.5,
            fillColor: "blue",
            fillOpacity: 0.95,
            strokeWeight: 0.4
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
              scale: 5.5,
              fillColor: this.markerColor(marker.type),
              fillOpacity: 0.95,
              strokeWeight: 0.4
            }}
          />) }
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAivECeR4VCc4a19DC4cuwJc_IqFlyt5RU'
})(MapContainer);
