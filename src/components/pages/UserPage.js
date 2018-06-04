import * as React from 'react';
import GarbageList from '../GarbageList';

const UserPage = (props) => {
  return (
    <div className="page">
      
      <p>Hello { props.user.displayName }!</p>
      <GarbageList user={ props.user } />
      
    </div>
  );
}
export default UserPage;