import React, { Component } from 'react';
import Search from './Search';
import './styles/Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome</h1>
      <Search />
    </div>
  );
};

export default Welcome;