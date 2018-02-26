export default function cleanApiData(data) {
  const cleanApiData = {
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
    },
    seven: data.hourly_forecast.slice(0, 7).map((hour) => {
      return {
        hour: hour.FCTTIME.civil,
        icon: hour.icon_url,
        tempF: hour.temp.english
      };
    }),
    ten: data.forecast.simpleforecast.forecastday.map((day) => {
      return {
        day: day.date.weekday,
        icon: day.icon_url,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit
      };
    })
  };

  return cleanApiData;
}