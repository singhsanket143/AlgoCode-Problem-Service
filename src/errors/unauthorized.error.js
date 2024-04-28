const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends BaseError {
  constructor() {
    super(
      "UnauthorizedError",
      StatusCodes.UNAUTHORIZED,
      `Unauthorized access`,
      {}
    );
  }
}

module.exports = UnauthorizedError;
