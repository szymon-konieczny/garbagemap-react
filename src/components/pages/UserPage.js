import * as React from 'react';
import GarbageList from '../GarbageList';

export default class UserPage extends React.Component {
  state = {
    userName: null
  };

  componentDidMount = () => {
    this.setState({
      userName: this.props.user.displayName
    });
  };

  render() {
    return (
      <div className="page">
        
        <p>Hello { this.state.userName}!</p>
        <GarbageList user={ this.props.user } />
        
      </div>
    );
  };
};