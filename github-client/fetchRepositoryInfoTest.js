const fetchRepositoryInfo = require('./fetchRepositoryInfo');

const repository = 'sinatra/sinatra';

fetchRepositoryInfo(repository, console.log)
