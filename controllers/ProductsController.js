const productsService = require('../services/ProductsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  if (!products) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(products);
};

module.exports = getAll;
