import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/TenDay.css';

export default function TenDay(props) {
  return (
    <div>
      <h1 className="ten-title">Ten Day Forecast</h1>
      <div className="ten-card">
        {
          props.cleanApiData.ten.map((element, i) => {
            return <Card
              key={i}
              day={element.day}
              icon={element.icon}
              high={"H: " + element.high + "˚"}
              low={"L: " + element.low + "˚"} />;
          })
        }
      </div>
    </div>
  );
}

TenDay.propTypes = {
  cleanApiData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ])
};