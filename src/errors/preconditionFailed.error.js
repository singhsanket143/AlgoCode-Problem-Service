const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class preconditionFailedError extends BaseError {
  constructor(details) {
    super("preconditionFailed", StatusCodes.PRECONDITION_FAILED, `Precondition failed`, details);
  }
}

module.exports = preconditionFailedError;