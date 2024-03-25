const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ForbiddenError extends BaseError {
  constructor() {
    super("ForbiddenError", StatusCodes.FORBIDDEN, `Forbidden access`, {});
  }
}

module.exports = ForbiddenError;