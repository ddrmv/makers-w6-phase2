// const GithubApi = require('./githubApi');

class Github {
  constructor(api) {
    this.api = api;
    this.repoData;
  }
  
  fetch(repo) {
    this.api.fetchRepositoryData(repo, (responseBody) => {
      this.repoData = responseBody;
    });
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;
