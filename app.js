const express = require('express');
const rescue = require('express-rescue');
const Products = require('./controllers/ProductsController');
const Sales = require('./controllers/SalesController');
const productMiddleware = require('./middlewares/productsMiddleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Products Routes
app.get('/products', rescue(Products.getAll));
app.get('/products/:id', rescue(Products.getById));
app.post('/products', rescue(Products.create));
app.put('/products/:id', productMiddleware.validateProduct, rescue(Products.updateProduct));
app.delete('/products/:id', rescue(Products.deleteProduct));

// Sales Routes
app.get('/sales', rescue(Sales.getAll));
app.get('/sales/:id', rescue(Sales.getById));
app.post('/sales', rescue(Sales.create));
app.put('/sales/:id', rescue(Sales.update));
app.delete('/sales/:id', rescue(Sales.exclude));

module.exports = app;
