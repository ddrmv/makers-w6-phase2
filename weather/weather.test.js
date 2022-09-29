const Weather = require('./weather');
const WeatherApi = require('./weatherApi');

describe('Weather', () => {
  it('returns weather forecast for selected city', () => {
    const mockApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: 'London',
          timezone: 3600
        });
      }
    };

    const mockWeatherView = {
      displayWeather: (data) => {
      }
    }

    const weather = new Weather(mockApi, mockWeatherView);
    weather.fetch('London');
    expect(weather.getWeatherData()).toEqual({
      name: 'London',
      timezone: 3600
    });
  });
});
