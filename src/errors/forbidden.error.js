const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class ForbiddenError extends BaseError {
  constructor(details) {
    super(
      "403 Forbidden",
      StatusCodes.FORBIDDEN,
      "Access to the requested resource is forbidden. You may not have the necessary permissions to access this content. Please contact the administrator for assistance.",
      details
    );
  }
}

module.exports = ForbiddenError;
