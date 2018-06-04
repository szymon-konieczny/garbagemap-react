import * as React from 'react';
import moment from 'moment';
import { refGarbages } from '../firebase/firebase';
import { fetchGarbages } from '../actions/garbages';

import '../styles/components/pages/GarbageList.scss';

class GarbageList extends React.Component {

  garbages = [];

  render() {
    refGarbages.once('value', snapshot => Object.entries(snapshot.val())
      .filter(item => item[1].userId === this.props.user.uid )
      .map((garbage, index) => {
        const garbageConfig = {
          type: garbage[1].type,
          location: garbage[1].location,
          userId: garbage[1].userId,
          createdAt: garbage[1].createdAt,
          description: garbage[1].description
        }
        this.garbages[index] = garbageConfig;
      }));

    return (
      <div className="page">
        <h3>You have spoted { this.garbages.length } threat{ this.garbages.length > 1 || this.garbages.length === 0 ? 's' : '' }.</h3>
        <table className="garbage-list__table">
          <tbody>
            <tr>
              <th className="garbage-list__table-header">No.</th>
              <th className="garbage-list__table-header">Name</th>
              <th className="garbage-list__table-header">Location</th>
              <th className="garbage-list__table-header">Description</th>
              <th className="garbage-list__table-header">Date of Addition</th>
              <th className="garbage-list__table-header">Actions</th>
            </tr>
            { this.garbages ? this.garbages.map((garbage, index) => (
              <tr key={ index } >
                <td className="garbage-list__table-cell">{ index + 1 }</td>
                <td className="garbage-list__table-cell">{ 
                  garbage.type === 'tires' ? 'Tires' : 
                  garbage.type === 'hazardous' ? 'Hazardous Waste' :
                  garbage.type === 'illegal' ? 'Illegal Dump' : 'Other Threat'
                 }</td>
                <td className="garbage-list__table-cell">{ garbage.location.lat },{ garbage.location.lng }</td>
                <td className="garbage-list__table-cell">{ garbage.description }</td>
                <td className="garbage-list__table-cell">{ garbage.createdAt }</td>
                <td className="garbage-list__table-cell">Edit / Remove</td>
              </tr>
          )) : <tr><td className="garbage-list__table-cell" colspan="3">Nothing to show yet...</td></tr> }
          </tbody>
        </table>
      </div>
    );
  }
}
export default GarbageList;