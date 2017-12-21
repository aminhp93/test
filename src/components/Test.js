import React, {  Component } from 'react';
import { connect } from 'react-redux';

import { activateGeod, closeGeod } from '../actions/index';


export class Test extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render() {
    console.log(this.props.geod);
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeGeod}>
            Exit Geod
          </button> :
          <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
            Click Me!
          </button>
       }

      </div>
    );
  }

}
 

// AppContainer.js
const mapStateToProps = function(state, ownProps){  
  console.log(1, state)
  return ({
    geod: state.geod
  })
    
};

const mapDispatchToProps = {  
  activateGeod,
  closeGeod
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

  