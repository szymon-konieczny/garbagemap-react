import * as React from 'react';
import '../styles/components/GarbageTypeSpotter.scss';
import GarbageType from './GarbageType';
import types from '../data/garbageTypes';

export default class GarbageTypeSpotter extends React.Component {
  
  garbages = [];

  garbage = {
    type: '',
    title: '',
    location: {
      lat: null,
      lng: null
    }
  };
  setMarkerTitle = (type) => {
    switch (type) {
      case 'tires':
        return 'Tires'
        break;
      case 'illegal':
        return 'Illegal Dump'
        break;
      case 'hazardous':
        return 'Hazardous Waste'
        break;
      default:
        return 'Other Threat'
    }
  }
  addGarbageToLocalStorage = (type) => {
    this.garbage = {
      type: type,
      title: this.setMarkerTitle(type),
      location: {
        lat: this.props.currentLocationLat,
        lng: this.props.currentLocationLng
      }
    }

    this.garbages.push(this.garbage);
    const garbagesToJSON = JSON.stringify(this.garbages);
    localStorage.setItem('garbageList', garbagesToJSON);
  }

  render(){
    return (
      <ul className="garbage-type-spotter">
        { types.map((type, index) => 
          <li key={ index }>
            <GarbageType 
              handleAddGarbage={ this.addGarbageToLocalStorage }
              type={ type }
            />
          </li>) 
        }
      </ul>
    );
  };
}
