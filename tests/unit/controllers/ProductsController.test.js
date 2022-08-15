const { expect } = require('chai');
const sinon = require('sinon');
const ProductsController = require('../../../controllers/ProductsController');
const ProductsService = require('../../../services/ProductsService');
const { getAll, getById } = require('../../unit/mocks/mocks');

describe('Testando a camada "controllers"', () => {
  describe('Testando a função "getAll"', () => {
    const res = {};
    const req = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    sinon.stub(ProductsService, "getAll").resolves(true);

    after(() => {
      ProductsService.getAll.restore();
    });

    it("...Com o status 200", async () => {
      await ProductsController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it("...Retornando o objeto", async () => {
      await ProductsController.getAll(req, res);
      expect(res.json.calledWith()).to.be.equal(true);
    });
  })

  describe("Testando a função getById", () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = 2;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    sinon.stub(ProductsService, "getById").resolves(getById);

    after(() => {
      ProductsService.getById.restore();
    });

    it("...Com o status 200", async () => {
      await ProductsController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  // describe('Testando a Função "create"', () => {

  // });

});
