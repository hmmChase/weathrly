import React from 'react';
import './styles/Card.css';

export default function Card(props) {
  if (props.time) {
  console.log('seven hour card:' + props)
    return (
      <div>
        <img src={props.icon} />
        <p>{props.time}</p>
        <p>{props.temp}</p>
      </div>
    );
  }

  if (props.day) {
   return (
    <div>
      <h2>{props.day}</h2>
      <img src={props.icon} />
      <p>{props.high}</p>
      <p>{props.low}</p>
    </div>
    );
  }
}