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
  }

  render() {

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