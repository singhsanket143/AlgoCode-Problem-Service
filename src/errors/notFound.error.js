const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(resource, details) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      `Not Found: The requested resource ${resource} could not be found.`,
      details
    );
  }
}

module.exports = NotFoundError;
