import React from 'react';
import cleanApiData from './cleanApiData';
import Card from './Card';
import './styles/SevenHour.css';

export default function SevenHour(props) {
  return (
    <div className="today">

      {
        props.cleanApiData.seven.map((element, i) => {
          return <Card key={i} time={element.hour} icon={element.icon} temp={element.tempF} />;
        })
      }

    </div>
  );

}