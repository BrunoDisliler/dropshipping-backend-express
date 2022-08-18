const { expect } = require("chai");
const Sinon = require("sinon");
const saleModel = require("../../../models/SalesModel");
const saleService = require("../../../services/SalesService");

describe("Testando saleService", () => {
  beforeEach(Sinon.restore);

  const resultGetAll = [
    {
      saleId: 1,
      date: "2022-08-13T17:35:22.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: "2022-08-13T17:35:22.000Z",
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: "2022-08-13T17:35:22.000Z",
      productId: 3,
      quantity: 15,
    },
  ];

  const resultById = [
    {
      saleId: 2,
      date: "2022-08-13T17:35:22.000Z",
      productId: 3,
      quantity: 15,
    },
  ];

  it("Testando Função getAll", async () => {
    Sinon.stub(saleModel, "getAll").resolves(resultGetAll);
    const result = await saleService.getAll();
    expect(result).to.be.a("array");
    expect(result[0]).to.all.keys("saleId", "date", "productId", "quantity");
    expect(result[1]).to.all.keys("saleId", "date", "productId", "quantity");
  });

  it("Testando Função getById", async () => {
    Sinon.stub(saleModel, "getById").resolves(resultById);
    const sales = await saleService.getById(3);
    expect(sales.code).to.be.eq(200);
    expect(sales.data).to.be.eq(resultById);
  });

  it("Testando Função getById para falhar", async () => {
    Sinon.stub(saleModel, "getById").resolves([]);
    const sales = await saleService.getById(3);
    expect(sales.code).to.be.eq(404);
  });
});
