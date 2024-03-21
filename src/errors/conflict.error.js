const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ConflictError extends BaseError {
  constructor(details) {
    super(
      "Conflict Error",
      StatusCodes.CONFLICT,
      `Conflict: The request could not be processed because of some conflict in the request`,
      details
    );
  }
}

module.exports = ConflictError;
