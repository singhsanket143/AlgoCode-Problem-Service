const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class TimeoutError extends BaseError {
  constructor() {
    super("TimeoutError", StatusCodes.REQUEST_TIMEOUT, `Request timed out`, {});
  }
}

module.exports = TimeoutError;
