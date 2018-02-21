import React, { Component } from 'react';
import './styles/Search.css';

 export default class Search extends Component {
  render() {
    return (
      <div>
        <input className='search-bar' type='search' placeholder='Search by Location' />
        <input className='search-button'type="submit" placeholder="Search" />
      </div>
    );
  };
}
