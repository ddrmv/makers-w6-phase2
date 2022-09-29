const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.send("Hello, express x3!\n");
});

app.post('/counter', (req, res) => {
  counter++;
  res.send(`Counter incermented by 1 to ${counter}\n`);
})

app.get('/counter', (req, res) => {
  res.send(`Counter is ${counter}\n`);
})

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send(`Counter is reset to ${counter}\n`)
})

console.log(`Server listening on localhost:${port}\n`);
app.listen(port);