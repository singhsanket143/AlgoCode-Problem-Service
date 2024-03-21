const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class MethodNotAllowed extends BaseError {
  constructor(requestMethod, details) {
    super(
      "Method Not Allowed",
      StatusCodes.FORBIDDEN,
      `Method Not Allowed: The ${requestMethod} is not allowed for this service`,
      details
    );
  }
}

module.exports = MethodNotAllowed;
