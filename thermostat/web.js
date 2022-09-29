const Thermostat = require('./thermostat');
const express = require('express');
const app = express();
const port = 3000;

const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  const sringOutput = JSON.stringify(
      {temperature: thermostat.getTemperature()});
  res.send(sringOutput);
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send('up');
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send('down');
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send('reset');
});

console.log(`Server listening on localhost:${port}\n`);
app.listen(port);
