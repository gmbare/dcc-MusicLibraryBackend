const repoBase = require('./repository-base');

const connectionString = "./data/products.json"

exports.findAll = () => {
  return repoBase.findAll(connectionString);
};

exports.findById = (id) => {
  return repoBase.findById(connectionString, id);
};

exports.create = (product) => {
  return repoBase.create(connectionString, product);
};

exports.update = (id, product) => {
  return repoBase.update(connectionString, id, product);
};

exports.delete = (id) => {
  return repoBase.deleteRecord(connectionString, id);
};