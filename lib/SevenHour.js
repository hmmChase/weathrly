import React from 'react';
import cleanApiData from './cleanApiData';
import Card from './Card';
import './styles/SevenHour.css';

export default function SevenHour(props) {
  return (
    <div>
      <h1 className="seven-title">Seven Hour Forecast</h1>
      <div className="seven-card">
        {
          props.cleanApiData.seven.map((element, i, array) => {
            return <Card key={i} time={element.hour} icon={element.icon} temp={element.tempF + "˚"} />;
          })
        }
      </div>
    </div>
  );

}