const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class GATEWAY_TIMEOUT extends BaseError {
  constructor() {
    super(
      "Gateway Timeout",
      StatusCodes.GATEWAY_TIMEOUT,
      `The server did not receive a timely response from an upstream server it accessed to process the request.`,
      {}
    );
  }
}

module.exports = GATEWAY_TIMEOUT;
