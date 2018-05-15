import * as React from 'react';
import { fetchGarbages } from '../../actions/garbages';

import '../../styles/components/pages/GarbageList.scss';

const GarbageList = (props) => {
  const garbages = fetchGarbages();
  return (
    <div className="page">
      <h1>List of garbages</h1>
      <table className="garbage-list__table">
        <tbody>
          <tr>
            <th className="garbage-list__table-header">No.</th>
            <th className="garbage-list__table-header">Name</th>
            <th className="garbage-list__table-header">Location</th>
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
    </div>
  );
}
export default GarbageList;