const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class AuthenticationError extends BaseError {
  constructor(details) {
    super("AuthenticationError", StatusCodes.UNAUTHORIZED, `Authentication failed`, details);
  }
}

module.exports = AuthenticationError;