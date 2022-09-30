const Github = require('./github');
const GithubApi = require('./githubApi');

describe('github', () => {
  it('gets the repo data fetched by the api class', (done) => {
    const api = new GithubApi;
    const github = new Github(api);
    github.fetch('sinatra/sinatra');
    setTimeout(() => {
      // alternative way to use jest matchers
      // expect(github.getRepoData().name).toBe('sinatra');
      expect(github.getRepoData()).toHaveProperty('name', 'sinatra');
      done();
    }, 1000);
  });
});
