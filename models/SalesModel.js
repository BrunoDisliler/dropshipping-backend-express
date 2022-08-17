const connection = require('./connection');
const salesQueries = require('./SalesQueries');

const getAll = async () => {
  const [sales] = await connection.execute(salesQueries.getAll());
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(salesQueries.getById(), [id]);
  return sale;
};

const getByIdObjReturn = async (id) => {
  const sale = await connection.execute(salesQueries.getById(), [id]);
  // return sale;
  return { data: sale, code: 200 };
};

const createSale = async () => {
  const [sale] = await connection.query(salesQueries.createSale());
  return sale.insertId;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  await connection.execute(salesQueries.createSaleProduct(), [
    saleId,
    productId,
    quantity,
  ]);
  return true;
};

const exclude = async (id) => {
  await connection.execute(salesQueries.excludeSaleProduct(), [id]);
  await connection.execute(salesQueries.excludeSale(), [id]);
  return id;
};

const update = async (saleId, productId, quantity) => {
  await connection.execute(salesQueries.update(), [
    quantity,
    productId,
    saleId,
  ]);
  return true;
};

module.exports = {
  getAll,
  getById,
  getByIdObjReturn,
  createSale,
  createSaleProduct,
  exclude,
  update,
};
