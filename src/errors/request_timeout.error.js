const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class REQUEST_TIMEOUT extends BaseError {
  constructor() {
    super(
      "Request timed out",
      StatusCodes.REQUEST_TIMEOUT,
      `The server timed out waiting for the request.`,
      {}
    );
  }
}

module.exports = REQUEST_TIMEOUT;
