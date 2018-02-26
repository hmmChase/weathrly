import React from 'react';
import cleanApiData from './cleanApiData';
import './styles/CurrentWeather.css';

export default function CurrentWeather(props) {
  return (
    <div className="today">
      <div className="current-weather">
        <h2 className="today-title">Today's Weather</h2>
        <h2 className="current-location">{props.cleanApiData.curr.location}</h2>
        <h3 className="current-day">{props.cleanApiData.curr.day}, {props.cleanApiData.curr.month}, {props.cleanApiData.curr.date}</h3>
        <img className="weather-icon" src={props.cleanApiData.curr.icon} />
        <h2 className="current-temp">{props.cleanApiData.curr.temp}<span>˚</span></h2>
        <h3 className='conditions'>Currently: {props.cleanApiData.curr.conditions}</h3>
      </div>
      <div className="todays-weather">
        <h2 className="expected-today">Expected Today</h2>
        <h2 className="todays-temp">{props.cleanApiData.curr.high}<span>˚ </span> </h2>
        <h2 className="todays-low">/ {props.cleanApiData.curr.low}<span>˚</span></h2>
        <h3 className="summary">{props.cleanApiData.curr.summary}</h3>
      </div>
    </div>
  );
}

