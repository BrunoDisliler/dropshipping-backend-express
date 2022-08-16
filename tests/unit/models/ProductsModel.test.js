const sinon = require('sinon');
const { expect } = require('chai');
const { getAll, getById, create } = require('../mocks/mocks');
const connection = require('../../../models/connection');
const ProductsModel = require('../../../models/ProductsModel');

describe('Testando a camada Model do "Product"', () => {
  describe('Testando a Função "getAll"', () => {
    before(async () => {
      const execute = getAll;

      sinon.stub(connection, "execute").resolves(execute);
    });
    after(async () => {
      connection.execute.restore();
    });

    it('Testando se retorno é um objeto', async () => {
      const response = await ProductsModel.getAll();
      expect(response).to.be.an('object');
    });
  });

  describe('Testando a Função "getById"', () => {
    before(async () => {
      const execute = [getById];

      sinon.stub(connection, "execute").resolves(execute);
    });
    after(async () => {
      connection.execute.restore();
    });

    it('Testando se retorna um array, e se tem apenas um objeto', async () => {
      const getByIdTest = await ProductsModel.getById(2);
      expect(getByIdTest).to.be.an('object');
    });
  });

  describe('Testando a Função "Create"', () => {
    before(async () => {
      const execute = [create];

      sinon.stub(connection, 'execute').resolves(execute);
    });
    after(async () => {
      connection.execute.restore();
    });

    it("Testando se retorna um array, e se o array tem apenas um objeto", async () => {
      const response = await ProductsModel.create(create);
      expect(response).to.be.an('object');
    });
  });
});
