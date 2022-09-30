const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-unused-vars
    thermostat = new Thermostat();
  });

  describe('#getTemperature', () => {
    it('returns default value of 20', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('#up', () => {
    it('increases temperature by 1', () => {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('increases up to 32 by default', () => {
      for (let i = 0; i<20; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });

    it('increases up to 32 when powerSavingMode is false', () => {
      thermostat.setPowerSavingMode(false);
      repeatObjectFnTimes(thermostat, 'up', 20);
      expect(thermostat.getTemperature()).toEqual(32);
    });

    it('increases up to 25 when powerSavingMode is true', () => {
      thermostat.setPowerSavingMode(true);
      repeatObjectFnTimes(thermostat, 'up', 20);
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('#setPowerSavingMode', () => {
    it('sets temperature to 25 on enable if already higher', () => {
      expect(thermostat.getTemperature()).toEqual(20);
      repeatObjectFnTimes(thermostat, 'up', 20);
      expect(thermostat.getTemperature()).toEqual(32);
      thermostat.setPowerSavingMode(true);
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('#down', () => {
    it('decreases temperature by 1', () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });

    it('does not decrease temperature below 10', () => {
      repeatObjectFnTimes(thermostat, 'down', 20);
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe('#reset', () => {
    it('resets temperature to 20', () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('integration', () => {
    it('passes the example test', () => {
      expect(thermostat.getTemperature()).toEqual(20);
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(21);
      thermostat.setPowerSavingMode(true);
      repeatObjectFnTimes(thermostat, 'up', 10);
      expect(thermostat.getTemperature()).toEqual(25);
      thermostat.setPowerSavingMode(false);
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(26);
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });
});

const repeatObjectFnTimes = (object, callbackName, times) => {
  for (let i = 0; i < times; i++) {
    object[callbackName]();
  }
};
