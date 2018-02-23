import React, { Component } from 'react';
import { cleanApiData } from './cleanApiData';
import './styles/CurrentWeather.css';

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="today">
        <div className="current-weather">
          <h2 className="current-location">{this.props.cleanApiData.curr.location}</h2>
          <h3 className="current-day">{this.props.cleanApiData.curr.day}, {this.props.cleanApiData.curr.month}, {this.props.cleanApiData.curr.date} </h3>
          <img className="weather-icon" src={this.props.cleanApiData.curr.icon} />
          <h2 className="current-temp">{this.props.cleanApiData.curr.temp}<span>˚</span></h2>
          <h3 className='conditions'>Currently: {this.props.cleanApiData.curr.conditions}</h3>
        </div>
        <div className="todays-weather">
          <h2 className="today-title">Today's Weather</h2>
          <h2 className="todays-temp">{this.props.cleanApiData.curr.high}<span>˚ </span> </h2>
          <h2 className="todays-temp todays-low">/ {this.props.cleanApiData.curr.low}<span>˚</span></h2>
          <h3 className="summary">{this.props.cleanApiData.curr.summary}</h3>
        </div>
      </div>
    );
  }
}