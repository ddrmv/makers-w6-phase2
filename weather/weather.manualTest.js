const Weather = require('./weather');
const WeatherApi = require('./weatherApi');
const WeatherView = require('./weatherView');

const api = new WeatherApi();
const weatherView = new WeatherView;
const weather = new Weather(api, weatherView);


weather.fetch('Bristol');

const printData = () => {
  weather.displayWeather();
}

setTimeout(printData, 1000);