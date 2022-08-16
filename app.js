const express = require('express');
const rescue = require('express-rescue');
const Products = require('./controllers/ProductsController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', rescue(Products.getAll));

app.get('/products/:id', rescue(Products.getById));

app.post('/products', rescue(Products.create));

// app.get('/sales', Products.getAllSales);

module.exports = app;
