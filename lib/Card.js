import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';

export default function Card(props) {
  if (props.time) {
    return (
      <div className="card">
        <h1 className="time">{props.time}</h1>
        <img className="seven-icon" src={props.icon} />
        <p className="temp">{props.temp}</p>
      </div>
    );
  }

  if (props.day) {
    return (
      <div className="card">
        <h1 className="day">{props.day}</h1>
        <img className="ten-icon" src={props.icon} />
        <p className="temp">{props.high}</p>
        <span className="temp ten-low">{props.low}</span>
      </div>
    );
  }
}

Card.propTypes = {
  time: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.string,
  day: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string
};