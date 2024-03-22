const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends BaseError {
  constructor(details) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      "Unauthorized: Authentication is required and has failed or has not yet been provided.",
      details
    );
  }
}

module.exports = UnauthorizedError;
