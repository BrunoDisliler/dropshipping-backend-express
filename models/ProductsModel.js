const connection = require('./connection');

// Requisito 01
const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

// Requisito 01
const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product[0];
};

// Requisito 03
const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES (?)';
  const [product] = await connection.execute(query, [name]);
  return { id: product.insertId, name };
};

const updateProduct = async (id, name) => {
  const query = `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?;`;
  await connection.query(query, [name, id]);
  return { id, name };
};

const deleteProduct = async (id) => {
  const query = `DELETE FROM StoreManager.products
    WHERE id = ?;`;
  await connection.query(query, [id]);
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
};
