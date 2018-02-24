import React from 'react';
import cleanApiData from './cleanApiData';
import Card from './Card';
import './styles/TenDay.css';

export default function TenDay(props) {
  return (
    <div className="today ten-day">
      {
        props.cleanApiData.ten.map((element, i) => {
          return <Card key={i} day={element.day} icon={element.icon} high={element.high} low={element.low} />
        })
      }
    </div>
  );
}