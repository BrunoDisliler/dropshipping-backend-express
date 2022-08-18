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

// Requisito 02 em: ./testes

// Requisito 03
const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES (?)';
  const [product] = await connection.execute(query, [name]);
  return { id: product.insertId, name };
};

// Requisito 04 em: ./middlewares/productsMiddleware
// Requisito 05 em: ./testes
// Requisito 06 em: ./salesModel
// Requisito 07 em: ./testes
// Requisito 08 em: ./salesModel
// Requisito 09 em: ./testes

// Resquisito 10
const updateProduct = async (id, name) => {
  const query = `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?;`;
  await connection.query(query, [name, id]);
  return { id, name };
};

// Requisito 11 em: ./testes

// Requisito 12
const deleteProduct = async (id) => {
  const query = `DELETE FROM StoreManager.products
    WHERE id = ?;`;
  await connection.query(query, [id]);
};

// Requisito 13 em: ./testes
// Requisito 14 em: ./SalesModel
// Requisito 15 em: ./testes
// Requisito 16 em: ./SalesModel

// Requisito 18
const search = async (searchTerm) => {
  const query = `
    SELECT * FROM products
    WHERE name LIKE ?
    `;
  const [products] = await connection.execute(query, [`%${searchTerm}%`]);
  return products;
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteProduct,
  search,
};
