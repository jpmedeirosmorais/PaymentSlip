module.exports = (app) => {
  const controller = require("../controllers/paymentSlip.js")();

  app.route("/boleto/:digitableLine").get(controller.slipPayment);
};
