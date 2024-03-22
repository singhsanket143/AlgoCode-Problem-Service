const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends BaseError {
  constructor(details) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      "The requested resource was not found.",
      details
    );
  }
}

module.exports = NotFound;
