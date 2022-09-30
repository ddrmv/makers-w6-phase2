const Github = require('./github');

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
