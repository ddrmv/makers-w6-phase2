const got = require('got');

const fetchRepositoryInfo = (repo, callback) => {
  const url = 'https://api.github.com/repos/' + repo
  got(url).then((response) => callback(JSON.parse(response.body)));
};

module.exports = fetchRepositoryInfo;
