const got = require('got');

class GithubApi {
  fetchRepositoryData(repo, callback) {
    const url = 'https://api.github.com/repos/' + repo
      got(url).then((response) => {
        callback(JSON.parse(response.body));
      })
  }
}

module.exports = GithubApi;
