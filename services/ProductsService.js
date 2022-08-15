const productsModel = require('../models/ProductsModel');

const getAll = async () => {
  const product = await productsModel.getAll();
  return product;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

module.exports = {
  getAll,
  getById,
};
