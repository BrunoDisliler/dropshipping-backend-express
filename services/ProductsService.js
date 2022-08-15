const productsModel = require('../models/ProductsModel');

const getAll = async () => {
  const product = await productsModel.getAll();
  return product;
};

module.exports = getAll;
