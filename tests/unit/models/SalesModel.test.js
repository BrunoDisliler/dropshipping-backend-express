const { expect } = require("chai");
const Sinon = require("sinon");
const connection = require("../../../models/connection");
const saleModel = require("../../../models/SalesModel");

describe("Testando saleModel", () => {
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
    Sinon.stub(connection, "execute").resolves([resultGetAll]);

    const sales = await saleModel.getAll();

    expect(sales[0]).to.have.all.keys(
      "saleId",
      "date",
      "productId",
      "quantity"
    );
    expect(sales).to.be.eq(resultGetAll);
    expect(sales[0].saleId).to.be.eq(1);
  });

  it("Testando Função getProductById", async () => {
    Sinon.stub(connection, "execute").resolves([resultById]);

    const sales = await saleModel.getById(2);

    expect(sales[0]).to.have.all.keys(
      "saleId",
      "date",
      "productId",
      "quantity"
    );
    expect(sales[0].saleId).to.be.eq(2);
    expect(sales[0].productId).to.be.eq(3);
  });
});
