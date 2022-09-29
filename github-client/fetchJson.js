const got = require('got');

const fetchJson = (url, callback) => {
  got(url).then((response) => callback(JSON.parse(response.body)));
};

module.exports = fetchJson;