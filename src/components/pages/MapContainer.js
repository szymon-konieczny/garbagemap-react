import * as React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GarbageTypeSpotter from '../GarbageTypeSpotter';
import moment from 'moment';
import type from '../../data/garbageTypes';
import markers from '../../data/markers';
import { refGarbages } from '../../firebase/firebase';

import '../../styles/components/pages/MapContainer.scss';

class MapContainer extends React.Component {
  garbages = [];

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
  refGarbages.once('value', snapshot => Object.entries(snapshot.val())
      .map((item, index) => {
        const garbageConfig = {
          type: item[1].type,
          location: item[1].location,
          userId: item[1].userId,
          createdAt: item[1].createdAt,
          description: item[1].description  
        }
        this.garbages[index] = garbageConfig;
    })
  );

  return (
    <React.Fragment>
      { 
        this.props.user && 
        <GarbageTypeSpotter 
          user={ this.props.user }
          currentLocationLat={ this.props.currentLocationLat } 
          currentLocationLng={ this.props.currentLocationLng } 
        />
      }
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
        disableDefaultUI={ false }
      >
      <Marker 
        title="Current location"
        icon={{
          path: this.props.google.maps.SymbolPath.CIRCLE,
          scale: 5.5,
          fillColor: "#0090FF",
          fillOpacity: 1,
          strokeColor: 'white',
          strokeWeight: 3.5,
          strokeOpacity: 0.5
        }}
        position={{lat: this.props.currentLocationLat, lng: this.props.currentLocationLng}} 
        draggable={ false }
      />
      { 
        this.garbages.map((marker, index) => 
          <Marker 
            key={ index } 
            position={ marker.location } 
            description={ marker.description }
            icon={{
              path: this.props.google.maps.SymbolPath.CIRCLE,
              scale: 6.5,
              fillColor: this.markerColor(marker.type),
              fillOpacity: 0.95,
              strokeColor: 'white',
              strokeWeight: 2.4
            }}
          />
        )
      }
      </Map>
    </React.Fragment>);
  };
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAivECeR4VCc4a19DC4cuwJc_IqFlyt5RU'
})(MapContainer);
