import key from './api-key';

const root = 'http://api.wunderground.com';
const extentions = '/conditions/forecast/hourly/geolookup/forecast10day/q/';

const retrieveWeather = (location) => {
  return fetch(`${root}/api/${key}${extentions}${location}.json`);
};

export default retrieveWeather;