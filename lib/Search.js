import React, { Component } from 'react';
import './styles/Search.css';

const Search = () => {
  return (
    <div>
      <input className='search-bar' type='search' placeholder='Search by Location' />
      <input className='search-button'type="submit" placeholder="Search" />
    </div>
  );
};

export default Search;