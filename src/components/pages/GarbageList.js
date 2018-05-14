import * as React from 'react';

const GarbageList = (props) => {
  const { currentLocationLat } = props;
  return (
    <div className="garbage-list">
      <br /><br /><br /><br /><br />
      <p>List of garbages</p>
      <br />
      { props.currentLocationLat && <p>Current location: { props.currentLocationLat }, { props.currentLocationLng }</p> }
    </div>
  );
}
export default GarbageList;