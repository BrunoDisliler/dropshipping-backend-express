const productsService = require('../services/ProductsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  if (!products) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

const create = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.create({ name });
  if (Object.keys(product).includes('isValid') && !product.isValid) {
    return res.status(product.code).json({ message: product.message });
  } res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  const { name } = req.body;
  const updatedProduct = await productsService.updateProduct(id, name);
  return res.status(200).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  await productsService.deleteProduct(id);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
};
