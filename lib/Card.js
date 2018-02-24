import React from 'react';
import './styles/Card.css';

export default function Card(props) {
  return (
    <div>
      <img src={props.icon} />
      <p>{props.time}</p>
      <p>{props.temp}</p>
    </div>

  );
}