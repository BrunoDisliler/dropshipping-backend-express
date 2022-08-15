const express = require('express');

const Products = require('./controllers/ProductsController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', Products);

module.exports = app;
