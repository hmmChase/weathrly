import React, { Component } from 'react';
import data from './mockData';
import cleanData from './cleanData';
import retrieveWeather from './Api';
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

  componentDidMount() {
    retrieveWeather()
      .then(response => response.json())
      .then(weatherInfo => {
        this.setState({
          apiData: weatherInfo
          // currentWeather: getCurrentWeather(weatherInfo), 
          // sevenHour: getSevenHour(weatherInfo), 
          // tenDay: getTenDay(weatherInfo),
          // city: obj.city,
          // state: obj.state
        });
      })
      .catch(error => console.log({error}));
  }
  
  setLocation(location) {
    this.setState({ location: location });

    // console.log('this.state.location:', this.state.location);
  }

  render() {
    // console.log('this.state.weatherData:', this.state.weatherData);
    console.log(this.state.apiData);
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