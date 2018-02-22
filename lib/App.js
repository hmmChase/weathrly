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
          <Currentweather 
            location={this.state.cleanData.curr.location}
            day={this.state.cleanData.curr.day}
            month={this.state.cleanData.curr.month}
            date={this.state.cleanData.curr.date}
            icon={this.state.cleanData.curr.icon}
            temperature={this.state.cleanData.curr.temp}
            conditions={this.state.cleanData.curr.conditions}

             />

        </div>
      );
    }
  }
}

export default App;