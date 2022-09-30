const DEFAULT_TEMPERATURE = 20;
const PSM_ON_MAX_TEMP = 25;
const PSM_OFF_MAX_TEMP = 32;
const MINIMUM_TEMPERATURE = 10;

class Thermostat {
  constructor() {
    this.temperature = DEFAULT_TEMPERATURE;
    this.powerSavingMode = false;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(setting) {
    this.powerSavingMode = setting;
    if (this.temperature > PSM_ON_MAX_TEMP) {
      this.temperature = PSM_ON_MAX_TEMP;
    }
  }

  up() {
    if (this.powerSavingMode === true && this.temperature < PSM_ON_MAX_TEMP ||
        this.powerSavingMode === false && this.temperature < PSM_OFF_MAX_TEMP) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > MINIMUM_TEMPERATURE) {
      this.temperature--;
    }
  }

  reset() {
    this.temperature = DEFAULT_TEMPERATURE;
  }
}

module.exports = Thermostat;
