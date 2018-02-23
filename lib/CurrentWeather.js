import React, { Component } from 'react';
import './styles/CurrentWeather.css';

export default class CurrentWeather extends Component {
  render() {
    return (
      <div className="today">
        <div className="current-weather">
          <h2 className="current-location">{this.props.apiData.curr.location}</h2>
          <h3 className="current-day">{this.props.apiData.curr.day}, {this.props.apiData.curr.month}, {this.props.apiData.curr.date} </h3>
          <img className="weather-icon" src={this.props.apiData.curr.icon} />
          <h2 className="current-temp">{this.props.apiData.curr.temp}<span>˚</span></h2>
          <h3 className='conditions'>Currently: {this.props.apiData.curr.conditions}</h3>
        </div>
        <div className="todays-weather">
          <h2 className="today-title">Today's Weather</h2>
          <h2 className="todays-temp">{this.props.apiData.curr.high}<span>˚ </span> </h2>
          <h2 className="todays-temp todays-low">/ {this.props.apiData.curr.low}<span>˚</span></h2>
          <h3 className="summary">{this.props.apiData.curr.summary}</h3>
        </div>  
      </div>
    );
  }
}