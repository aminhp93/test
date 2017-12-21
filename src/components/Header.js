import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
 
  render() {
   
    return (
      <div>
        <Link to="/">App</Link><br/>
        <Link to="/test">Test</Link><br/>
        <Link to="/todos">Todos</Link><br/>
      </div>
    );
  }
}


export default Header;
