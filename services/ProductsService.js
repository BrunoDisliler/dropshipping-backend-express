const productsModel = require('../models/ProductsModel');

const getAll = async () => {
  const product = await productsModel.getAll();
  return product;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

// Validations
const validate = (name) => {
  const nameValidation = '"name" is required';
  const nameLengthValidation = '"name" length must be at least 5 characters long';
  if (!name) return { code: 400, message: nameValidation, isValid: false };
  if (name.length < 5) return { code: 422, message: nameLengthValidation, isValid: false };
  return { isValid: true };
};

const create = async ({ name }) => {
  const validation = validate(name);
  if (!validation.isValid) return validation;
  const product = await productsModel.create({ name });
  return product;
};

module.exports = {
  getAll,
  getById,
  create,
};
