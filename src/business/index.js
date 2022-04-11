const paymentSlips = require("../api/data/paymentSlip.json");

function validationPaymentSlip(code) {
  if (!/^[0-9]{47}$/.test(code)) {
    return { status: 400, message: "Boleto inválido" };
  }
  const find = paymentSlips.data.find(
    (paymentSlip) => paymentSlip.digitableLine === code
  );

  if (find) {
    return {
      status: 200,
      message: {
        barCode: find.barCode,
        amount: find.amount,
        expirationDate: find.expirationDate,
      },
    };
  }
  return { status: 200, message: "Nenhum boleto encontrado" };
}

module.exports = { validationPaymentSlip };
