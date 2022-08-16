const express = require('express');
const bodyParser = require('body-parser');
const Products = require('./controllers/ProductsController');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', Products.getAll);

app.get('/products/:id', Products.getById);

app.post('/products', Products.create);

// app.get('/sales', Products.getAllSales);

module.exports = app;
