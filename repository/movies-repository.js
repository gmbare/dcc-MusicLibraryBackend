const repoBase = require('./repository-base');

const connectionString = "./data/movies.json"

exports.findAll = () => {
  return repoBase.findAll(connectionString);
};

exports.findById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.create = (movie) => {
  return repoBase.create(connectionString, movie);
};

exports.update = (id, movie) => {
  return repoBase.update(connectionString, id, movie);
};

exports.delete = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};

exports.findAllMoviesByGenre = (genre) => {
  let movies = repoBase.findAll(connectionString);
  let moviesByCategory = movies.filter((movie) => {
    return movie.genre == genre;
  });
  return moviesByCategory;
};
