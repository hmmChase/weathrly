import key from './api-key';

const root = 'http://api.wunderground.com';
const city = 'Denver';
const state = 'CO';

const retrieveWeather = () => {
  return fetch(`${root}/api/${key}/conditions/forecast/hourly/forecast10day/q/${state}/${city}.json`);
};

export default retrieveWeather;


// http://api.wunderground.com/api/c205c4179aab567c/conditions/geolookup/forecast/forecast10day/q/CO/Denver.json

// return fetch(`${root}/api/${key}/conditions/forecast10day/hourly/q/${location}.json`);
