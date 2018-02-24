import React from 'react';
import './styles/Card.css';

export default function Card(props) {
  if (props.time) {
    return (
      <div className="card">
        <p className="time">{props.time}</p>
        <img className="seven-icon" src={props.icon} />
        <p className="temp">{props.temp}</p>
      </div>
    );
  }

  if (props.day) {
   return (
    <div className="card">
      <h2 className="day">{props.day}</h2>
      <img className="ten-icon" src={props.icon} />
      <p className="temp">{props.high}</p>
      <p className="temp ten-low">{props.low}</p>
    </div>
    );
  }
}