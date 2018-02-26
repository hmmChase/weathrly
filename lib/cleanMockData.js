export default function cleanData(data) {
  const cleanData = {
    curr: {
      location: data.current_observation.display_location.full,
      conditions: data.current_observation.weather,
      temp: data.current_observation.temp_f,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      day: data.forecast.txt_forecast.forecastday[0].title,
      month: data.forecast.simpleforecast.forecastday[0].date.monthname,
      date: data.forecast.simpleforecast.forecastday[0].date.day,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      icon: data.current_observation.icon_url
    }
  };
  
  return cleanData;
}