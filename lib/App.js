import React, { Component } from 'react';
import cleanApiData from './cleanApiData';
import retrieveWeather from './Api';
import Welcome from './Welcome';
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
      location: localStorage.location,
      apiDataError: false
    };

    this.setLocation = this.setLocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  setLocation(location) {
    this.setState({ location: location });
    this.getWeatherData(location);
  }

  getWeatherData(location) {
    retrieveWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        if (weatherInfo.forecast) {
          localStorage.setItem('location', location);
          this.setState({
            apiDataError: false,
            cleanApiData: cleanApiData(weatherInfo),
            location: location
          });
        } else {
          this.setState({ apiDataError: true });
        }
      })
      .catch(() => {
        this.setState({ apiDataError: true });
      });
  }

  componentDidMount() {
    if (this.state.location) {
      this.getWeatherData(this.state.location);
    }
  }

  render() {
    if (this.state.apiDataError) {
      return (
        <div className='App'>
          <Search setLocation={this.setLocation} />
          <p className="error-message">Please enter a City and State or zipcode (ex. Denver, CO)</p>
          {
            this.state.cleanApiData &&
            <CurrentWeather cleanApiData={this.state.cleanApiData} />
          }
          {
            this.state.cleanApiData &&
            <SevenHour cleanApiData={this.state.cleanApiData} />
          }
          {
            this.state.cleanApiData &&
            <TenDay cleanApiData={this.state.cleanApiData} />
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
          {
            this.state.cleanApiData &&
            <SevenHour cleanApiData={this.state.cleanApiData} />
          }
          {
            this.state.cleanApiData &&
            <TenDay cleanApiData={this.state.cleanApiData} />
          }

        </div>
      );
    }
  }
}

export default App;