const WeatherApi = require('./weatherApi');

describe('WeatherApi', () => {
  it('fetches weather for given city', (done) => {
    api = new WeatherApi();
    api.fetchWeatherData('London', (data) => {
      expect(data.name).toEqual('London');
      done();
    })
  })
})