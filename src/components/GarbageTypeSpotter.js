import * as React from 'react';
import moment from 'moment';
import '../styles/components/GarbageTypeSpotter.scss';
import GarbageType from './GarbageType';
import types from '../data/garbageTypes';
import database from '../firebase/firebase';
import { saveGarbageToDatabase } from '../actions/garbages';

export default class GarbageTypeSpotter extends React.Component {
  
  garbages = [];

  garbage = {
    type: '',
    location: {
      lat: null,
      lng: null
    },
    userId: null
  };

  // setMarkerTitle = (type) => {
  //   switch (type) {
  //     case 'tires':
  //       return 'Tires'
  //       break;
  //     case 'illegal':
  //       return 'Illegal Dump'
  //       break;
  //     case 'hazardous':
  //       return 'Hazardous Waste'
  //       break;
  //     default:
  //       return 'Other Threat'
  //   }
  // }

  addGarbageToLocalStorage = (type) => {
    this.garbage = {
      type: type,
      location: {
        lat: this.props.currentLocationLat,
        lng: this.props.currentLocationLng
      },
      userId: this.props.user.uid,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    }

    this.garbages.push(this.garbage);
    const garbagesToJSON = JSON.stringify(this.garbages);

    if(this.props.currentLocationLat) {
      localStorage.setItem('garbageList', garbagesToJSON);
      saveGarbageToDatabase(this.garbage);
    } else {
      console.log('Unable to set location.');
    }
    
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
