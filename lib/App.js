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
      cleanData: cleanData(data),
      location: ''
    };
    
    this.setLocation = this.setLocation.bind(this);

    // console.log('this.state.cleanData:', this.state.cleanData);
  }
  

  setLocation(location) {
    this.setState({ location: location });

    // console.log('this.state.location:', this.state.location);
  }

  render() {
    // console.log('this.state.weatherData:', this.state.weatherData);

    if (!this.state.location) {
      return (
        <div className='App'>
          <Welcome />
          <Search setLocation={this.setLocation} />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Welcome />
          <Search setLocation={this.setLocation} />
          <Card cleanData={this.state.cleanData.curr.location} />
        </div>
      );
    }
  }
}

export default App;