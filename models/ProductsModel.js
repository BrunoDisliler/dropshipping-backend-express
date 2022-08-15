const connection = require('./connection');

// Requisito 01
const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

module.exports = getAll;
