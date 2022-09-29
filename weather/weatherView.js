class WeatherView {

  displayWeather(data) {
    console.log(`City:\t\t${data.name}`);
    console.log(`Weather:\t${data.weather[0].main}`);
    console.log(`Temperature:\t${data.main.temp}`);
    console.log(`Feels like:\t${data.main['feels_like']}`);
    console.log(`Humidity::\t${data.main.humidity}`);
  }
}

module.exports = WeatherView;
