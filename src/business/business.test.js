const { validationPaymentSlip } = require("./index");

describe("validate paymentSlip", () => {
  it("should have a valid digitable line and return a paymentslip", () => {
    expect(
      validationPaymentSlip("21299758700000020000001121100012100447561740123")
    ).toEqual({
      status: 200,
      message: {
        barCode: "21299758700000020000001121100012100447561743",
        amount: "110.00",
        expirationDate: "2019-01-01",
      },
    });
  });

  it("should return a message invalid paymentslip with just algarisms and smiller size", () => {
    expect(
      validationPaymentSlip("2129975870000002000000112110001210044756174012")
    ).toEqual({
      status: 400,
      message: "Boleto inválido",
    });
  });

  it("should return error with invalid characters but with the correct size", () => {
    expect(
      validationPaymentSlip("2129975870000002000000112110001210044*5617a012B")
    ).toEqual({
      status: 400,
      message: "Boleto inválido",
    });
  });

  it("should return error with size larger than limit", () => {
    expect(
      validationPaymentSlip("212997587000000200000011211000121004475617401231")
    ).toEqual({
      status: 400,
      message: "Boleto inválido",
    });
  });

  it("should return error with size smaller than limit", () => {
    expect(
      validationPaymentSlip("21299758700000020000001121100012100447561740121")
    ).toEqual({
      status: 200,
      message: "Nenhum boleto encontrado",
    });
  });
});
