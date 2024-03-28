const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class AuthenticationError extends BaseError {
  constructor() {
    super(
      "AuthenticationError",
      StatusCodes.UNAUTHORIZED,
      `Authentication failed`,
      {}
    );
  }
}

module.exports = AuthenticationError;
