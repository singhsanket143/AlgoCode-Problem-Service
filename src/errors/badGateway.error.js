const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class BadGateway extends BaseError {
  constructor(details) {
    super(
      "502 BAD GATEWAY",
      StatusCodes.BAD_GATEWAY,
      "We're sorry, but something went wrong while trying to connect to the server. Please try again later or contact support if the issue persists.",
      details
    );
  }
}
module.exports = BadGateway;
