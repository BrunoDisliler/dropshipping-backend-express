const { expect } = require('chai');
const sinon = require('sinon');
const ProductsModel = require('../../../models/ProductsModel');
const ProductsServices = require('../../../services/ProductsService');
const { getAll, getById, create } = require('../mocks/mocks');

describe('Testando a camada Services do "Product"', () => {
  describe('Testando a Função getAll', () => {
    before(() => {
      const execute = getAll;

      sinon.stub(ProductsModel, "getAll").resolves(execute);
    })

    after(() => {
      ProductsModel.getAll.restore();
    })

    it('Testando se retorna um array de objetos', async () => {
      const getAllTest = await ProductsServices.getAll();
      expect(getAllTest).to.be.an("array");
      expect(getAllTest[0]).to.be.an("object");
    })
  });

  describe('Testando a Funcao getById', () => {
    before(() => {
      const execute = getById;

      sinon.stub(ProductsModel, "getById").resolves(execute);
    });

    after(() => {
      ProductsModel.getById.restore();
    });

    it('Testando se retorna um array e se há apenas um objeto', async () => {
      const getByIdTest = await ProductsServices.getById(2);
      expect(getByIdTest).to.be.an("array");
      expect(getByIdTest[0]).to.be.an("object");
    })
  });

  describe('Testando a Função "Create"', () => {
    before(() => {
      const execute = create;

      sinon.stub(ProductsModel, 'create').resolves(execute);
    });

    after(() => {
      ProductsModel.create.restore();
    });

    it("Testando se retorno é um objeto", async () => {
      const response = await ProductsServices.create(create);
      expect(response).to.be.an('object');
    });
  });
});
