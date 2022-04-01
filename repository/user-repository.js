const repoBase = require('./repository-base');

const connectionString = "./data/users.json"

exports.findAll = () => {
  return repoBase.findAll(connectionString);
};

exports.findById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.create = (user) => {
  return repoBase.create(connectionString, user);
};

exports.update = (id, user) => {
  return repoBase.update(connectionString, id, user);
};

exports.delete = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};
