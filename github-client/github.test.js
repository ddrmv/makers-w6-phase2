
const Github = require('./github')
/*
// The commented out code works with the actual github api.
// The code below the commented out code works with mocked api.

//const GithubApi = require('./githubApi')
const api = new GithubApi();

// We inject the instance of `GithubApi`:
const github = new Github(api);

// This method will delegate to `GithubApi.fetchRepositoryData()`
github.fetch('sinatra/sinatra');

// And after a few moments, this should return a JS object with the repo information.
setTimeout(() => {console.log(github.getRepoData())}, 1000);
*/

describe('github', () => {
  it('gets the repo data fetched by the api class', () => {
    const mockApi = {
      fetchRepositoryData: (repoName, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'fake description'
        })
      }
    }

    const github = new Github(mockApi);
    github.fetch('sinatra/sinatra');
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'fake description'
    });
  });
});
