class Weather {
  constructor(api, weatherView) {
    this.api = api;
    this.weatherView = weatherView;
    this.weatherData = null;
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (parsedResponse) => {
      this.weatherData = parsedResponse;
    })
  }

  getWeatherData() {
    return this.weatherData;
  }

  displayWeather() {
    this.weatherView.displayWeather(this.weatherData);
  }
}

module.exports = Weather;
