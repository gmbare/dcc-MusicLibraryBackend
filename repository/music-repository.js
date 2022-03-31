const repoBase = require('./repository-base');

const connectionString = "./data/songs.json"

exports.findAll = () => {
  return repoBase.findAll(connectionString);
};

exports.findById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.create = (song) => {
  return repoBase.create(connectionString, song);
};

exports.update = (id, song) => {
  return repoBase.update(connectionString, id, song);
};

exports.delete = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};