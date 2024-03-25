const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(path, details) {
    super("NotFound", StatusCodes.NOT_FOUND, `The requested ${path} resource was not found.`, details);
  }
}

module.exports = NotFoundError;