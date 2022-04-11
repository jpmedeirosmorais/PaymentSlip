const { validationPaymentSlip } = require("../../business/index");

module.exports = () => {
  const controller = {
    slipPayment: (req, res) => {
      const digitableLine = req.params.digitableLine;

      const toSend = validationPaymentSlip(digitableLine);

      res.status(toSend.status).json(toSend.message);
    },
  };

  return controller;
};
