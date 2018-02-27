import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/SevenHour.css';

export default function SevenHour(props) {
  return (
    <div>
      <h1 className="seven-title">Seven Hour Forecast</h1>
      <div className="seven-card">
        {
          props.cleanApiData.seven.map((element, i) => {
            return <Card
              key={i}
              time={element.hour}
              icon={element.icon}
              temp={element.tempF + "˚"} />;
          })
        }
      </div>
    </div>
  );
}

SevenHour.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};