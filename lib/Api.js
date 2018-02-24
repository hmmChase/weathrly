import key from './api-key';

const root = 'http://api.wunderground.com';

const retrieveWeather = (location) => {
  return fetch(`${root}/api/${key}/conditions/forecast/hourly/geolookup/forecast10day/q/${location}.json`);
};

export default retrieveWeather;


// http://api.wunderground.com/api/c205c4179aab567c/conditions/geolookup/forecast/forecast10day/q/CO/Denver.json

// return fetch(`${root}/api/${key}/conditions/forecast10day/hourly/q/${location}.json`);
