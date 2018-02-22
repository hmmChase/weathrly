import React, { Component } from 'react';
import data from './mockData';
import cleanData from './cleanData';
import retrieveWeather from './Api';
import Welcome from './Welcome';
import Card from './Card';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      // weatherData: {},
      cleanData: cleanData(data),
      location: ''
    };
    
    this.setLocation = this.setLocation.bind(this);
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
  }

  render() {
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
          <Search setLocation={this.setLocation} />
          <CurrentWeather 
            location={this.state.cleanData.curr.location}
            day={this.state.cleanData.curr.day}
            month={this.state.cleanData.curr.month}
            date={this.state.cleanData.curr.date}
            icon={this.state.cleanData.curr.icon}
            temperature={this.state.cleanData.curr.temp}
            conditions={this.state.cleanData.curr.conditions}
             />
          <tenDay />
          
        </div>
      );
    }
  }
}

export default App;