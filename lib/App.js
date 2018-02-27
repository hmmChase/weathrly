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
      location: localStorage.location || '',
      apiDataError: false
    };

    this.setLocation = this.setLocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  setLocation(location) {
    this.setState({ location });
    this.getWeatherData(location);
  }

  setLocalStorage(location) {
    localStorage.setItem('location', location);
  }

  getWeatherData(location) {
    retrieveWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        if (weatherInfo.forecast) {
          this.setLocalStorage(location);
          this.setState({
            apiDataError: false,
            cleanApiData: cleanApiData(weatherInfo)
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
    return (
      <div className='App'>
        {
          !this.state.cleanApiData &&
          <Welcome />
        }
        <Search setLocation={this.setLocation} />
        {
          this.state.apiDataError &&
          <p className="error-message">
            Please enter a City and State or zipcode (ex. Denver, CO)
          </p>
        }
        {
          this.state.cleanApiData &&
          <div>
            <CurrentWeather cleanApiData={this.state.cleanApiData} />
            <SevenHour cleanApiData={this.state.cleanApiData} />
            <TenDay cleanApiData={this.state.cleanApiData} />
          </div>
        }
      </div>
    );
  }
}


export default App;