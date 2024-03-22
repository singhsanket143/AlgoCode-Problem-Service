const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resource, details = {}) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      `The requested resource ${resource} could not be found`,
      details
    );
  }
}

module.exports = NotFound;
