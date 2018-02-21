import React, { Component } from 'react';
import Data from './mockData';
import Welcome from './Welcome';
import Card from './Card';
import Search from './Search';
import Currentweather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Welcome />
        <Search />
      </div>
      );
    }
};

export default App;