const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class Unauthorized extends BaseError {
  constructor(details) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      "Authentication Required: Please log in or sign up to access this feature or content.",
      details
    );
  }
}

module.exports = Unauthorized;
