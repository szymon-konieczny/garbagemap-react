import * as React from 'react';
import { fetchGarbages } from '../../actions/garbages';

import '../../styles/components/pages/GarbageList.scss';

const GarbageList = (props) => {
  const garbages = fetchGarbages();
  return (
    <div className="page">
      
      <p>List of garbages</p>
      <table className="garbage-list__table">
        <tbody>
          <tr>
            <th className="garbage-list__table-cell">No.</th>
            <th className="garbage-list__table-cell">Name</th>
            <th className="garbage-list__table-cell">Location</th>
          </tr>
          { garbages.map((garbage, index) => (
            <tr key={ index } >
              <td className="garbage-list__table-cell">{ index + 1 }</td>
              <td className="garbage-list__table-cell">{ garbage.title }</td>
              <td className="garbage-list__table-cell">{ garbage.location.lat },{ garbage.location.lng }</td>
            </tr>
        )) }
        </tbody>
      </table>
      { props.currentLocationLat && <p>Current location: { props.currentLocationLat }, { props.currentLocationLng }</p> }
    </div>
  );
}
export default GarbageList;