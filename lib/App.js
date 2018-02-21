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
  constructor() {
    super();
    this.state = {
      apiData: null,
      weatherData: {}
    };
    this.setCity = this.setCity.bind(this);
  }

  setCity(city) {
    this.setState({ location: city });
    console.log(this);
  }

  render() {
    // console.log(this.state.weatherData)

    if (this.state.apiData) {
      return (
        <div className='App'>
          <Welcome />
          <Search setCity={this.setCity} />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Welcome />
          <Search />
          <Card />
        </div>
      );
    }
  }
}

export default App;