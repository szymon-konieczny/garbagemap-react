import * as React from 'react';

const GarbageList = (props) => {
  const { currentLocationLat } = props;
  return (
    <div className="garbage-list">
      <br /><br /><br /><br /><br />
      <p>List of garbages</p>
      <p>{ currentLocationLat }</p>
    </div>
  );
}
export default GarbageList;