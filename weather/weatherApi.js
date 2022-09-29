const got = require('got');
const apiKey = require('./apiKey')

class WeatherApi {
  constructor() {
    this.repoData = null;
  }

  fetchWeatherData(city, callback) {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
    `units=metric&q=${city}&appid=${apiKey}`
    got(apiUrl).then((response) => {
      this.repoData = JSON.parse(response.body);
      callback(this.repoData);
    })
  }
}

module.exports = WeatherApi;
