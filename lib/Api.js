import key from './api-key';

const root = 'http://api.wunderground.com';

const retrieveWeather = (location) => {
  return fetch(`${root}/api/${key}/conditions/forecast/hourly/geolookup/forecast10day/q/${location}.json`);
};

export default retrieveWeather;