import React, { Component } from 'react';
import './../public/css/Dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className='dropdown'>
        <p className='dropdown-label'>Time Period</p>
        <select className='dropdown-list'>
          <option>Q1 2018</option>
          <option>Q4 2017</option>
          <option>Q3 2017</option>
          <option>Q2 2017</option>
          <option>Q1 2017</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
