import React, { Component } from 'react';
import data from './mockData';
import cleanData from './cleanData';
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
      weatherData: {},
      cleanData: cleanData(data)
    };
    console.log(this.state.cleanData);
    this.setCity = this.setCity.bind(this);
  }
  

  setCity(city) {
    this.setState({ location: city });
    // console.log(this);
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
          <Card cleanData={this.state.cleanData.curr.location} />
        </div>
      );
    }
  }
}

export default App;