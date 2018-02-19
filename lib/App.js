import React, { Component } from 'react';
import Data from './mockData';
import Welcome from './Welcome';
import Card from './Card';
import Search from './Search';
import Currentweather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/App.css';



const App = () => {
  return (
    <div className='App'>
      <Welcome />
    </div>
  );
};

export default App;