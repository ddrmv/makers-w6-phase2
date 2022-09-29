const GithubApi = require('./githubApi')



const api = new GithubApi();

api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
  console.log(repositoryData);
});
