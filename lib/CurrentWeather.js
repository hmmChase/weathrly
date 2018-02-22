import React, { Component } from 'react';
import './styles/CurrentWeather.css';

export default class CurrentWeather extends Component {
  render() {
      return (
      <div className="current-weather">
        <h2 className="current-location">{this.props.location}</h2>
        <h3 className="current-day">{this.props.day}, {this.props.month}, {this.props.date} </h3>
        <img className="weather-icon" src={this.props.icon} />
        <h2 className="current-temp">{this.props.temperature}<span className="degree">˚</span></h2>
        <h3 className='conditions'>Currently: {this.props.conditions}</h3>
      </div>
    );  
  }
}