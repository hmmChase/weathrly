import React, { Component } from 'react';
// import data from './mockData';
import cleanApiData from './cleanApiData';
import retrieveWeather from './Api';
import Welcome from './Welcome';
import Card from './Card';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanApiData: null,
      location: null,
      ApiDataError: false
      // city: localStorage.city,
      // state: localStorage.state
    };

    this.setLocation = this.setLocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  setLocation(location) {
    this.setState({ location: location });
    this.getWeatherData(location);
  }

  // updateWeather() { 
  //   this.setState({ state: localStorage.state, city: localStorage.city });
  //   this.getWeatherData();
  // }

  getWeatherData(location) {
    // const state = localStorage.state;
    // const city = localStorage.city;

    retrieveWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        this.setState({
          error: false,
          cleanApiData: cleanApiData(weatherInfo)
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  componentDidMount() {
    if (this.state.location) {
      this.getWeatherData();
    }
  }

  render() {
    // !localStorage.city && !localStorage.state
    if (this.state.error) {
      return (
        <div className='App'>
          {
            this.state.cleanApiData &&
            <Search setLocation={this.setLocation} />
          }
          <Search setLocation={this.setLocation} />
          <p className="error-message">Please enter a City and State or zipcode (ex. Denver, CO)</p>
          {
            this.state.cleanApiData &&
            <CurrentWeather cleanApiData={this.state.cleanApiData} />
          }
        </div>
      );
    }

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
          {
            this.state.cleanApiData &&
            <Search setLocation={this.setLocation} />
          }
          {
            this.state.cleanApiData &&
            <CurrentWeather cleanApiData={this.state.cleanApiData} />
          }
          {/* <tenDay /> */}

        </div>
      );
    }

    // if (this.state.cleanApiData) {
    //   return (
    //     <div className='App'>
    //       <Search setLocation={this.setLocation} />
    //       <CurrentWeather cleanApiData={this.state.cleanApiData} />
    //     </div>
    //   );
    // }


  }
}

export default App;


// updateWeather={this.updateWeather}