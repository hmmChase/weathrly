import React, { Component } from 'react';
import './styles/CurrentWeather.css';

export default class CurrentWeather extends Component {
  render() {
    return (
      <div className="current-weather">
        <h2 className="current-location">{this.props.apiData.curr.location}</h2>
        <h3 className="current-day">{this.props.apiData.curr.day}, {this.props.apiData.curr.month}, {this.props.apiData.curr.date} </h3>
        <img className="weather-icon" src={this.props.apiData.curr.icon} />
        <h2 className="current-temp">{this.props.apiData.curr.temp}<span className="degree">˚</span></h2>
        <h3 className='conditions'>Currently: {this.props.apiData.curr.conditions}</h3>
      </div>
    );
  }
}