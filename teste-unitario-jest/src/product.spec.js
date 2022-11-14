const product = require("./product");

describe("Product Suit Tests", () => {
  //scenario
  it("should be correct sum", () => {
    //Arrange (Preparar o teste)
    const baseTaxMock = 19.9;
    const comeplementTax = 30;
    const expectedResult = 49.9;

    //Act (Rodar o teste)
    const receivedResult = product.calcTaxs(baseTaxMock, comeplementTax);

    //Assert (Verificar as asserções)
    expect(receivedResult).toBe(expectedResult);
  });

  it("should be minimum tax", () => {
    //Arrange (Preparar o teste)
    const baseTaxMock = 19.9;
    const comeplementTax = -20;
    const expectedResult = 0;

    //Act (Rodar o teste)
    const receivedResult = product.calcTaxs(baseTaxMock, comeplementTax);

    //Assert (Verificar as asserções)
    expect(receivedResult).toBeGreaterThan(expectedResult);
  });
});
