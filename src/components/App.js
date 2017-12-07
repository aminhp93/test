import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Test';
import Header from './Header';


class App extends React.Component {
 
  render() {
    return (
      <div>
      	<Header></Header>
       	<Switch>
       		<Route path="/test" component={Test} />
       	</Switch>
       	<div>App</div>
      </div>
    );
  }
}


export default App;
