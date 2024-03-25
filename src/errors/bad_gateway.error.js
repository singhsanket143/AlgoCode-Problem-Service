const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BAD_GATEWAY extends BaseError {
  constructor() {
    super(
      "Bad Gateway",
      StatusCodes.BAD_GATEWAY,
      `The server received an invalid response from an upstream server while trying to fulfill the request`,
      {}
    );
  }
}

module.exports = BAD_GATEWAY;
