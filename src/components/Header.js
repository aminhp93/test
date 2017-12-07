import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
 
  render() {
   
    return (
      <div>
        <Link to="/test">Test</Link>
        <div>Header</div>
      </div>
    );
  }
}


export default Header;
