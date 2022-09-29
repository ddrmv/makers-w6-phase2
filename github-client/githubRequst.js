const got = require('got');

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url)
  .then((response) => {
    console.log(JSON.parse(response.body));
  });
