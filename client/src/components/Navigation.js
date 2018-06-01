import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../public/css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className='nav-container'>
        <p><Link to='/'>Dashboard</Link></p>
        <p><Link to='/reports'>Reports</Link></p>
        <p><Link to='/more'>More</Link></p>
      </div>
    );
  }
}

export default Navigation;
