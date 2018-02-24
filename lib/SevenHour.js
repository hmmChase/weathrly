import React from 'react';
import cleanApiData from './cleanApiData';
import './styles/SevenHour.css';

export default function SevenHour(props) {
  return (
    <div className="today">

      {
        props.cleanApiData.seven.map((element, index) => {
          return <p>Time: {element.hour} Icon <img src={element.icon} /> Temp: {element.tempF}</p>;
        })
      }

    </div>
  );

}