import * as React from 'react';
import '../styles/components/GarbageType.scss';

export default class GarbageType extends React.Component {
  
  setTitle = props => this.props.handleAddGarbage(this.props.type); 

  render() {
    return (
      <React.Fragment>
        <span>{ this.props.type }</span>
        <div 
          className="garbage-type" 
          type={ this.props.type } 
          onClick={ this.setTitle }
        >
        </div>
      </React.Fragment>
    );
  }
};
