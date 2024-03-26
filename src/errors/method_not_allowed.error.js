const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class METHOD_NOT_ALLOWED extends BaseError {
  constructor() {
    super(
      "Method Not Allowed",
      StatusCodes.METHOD_NOT_ALLOWED,
      `The method specified in the request is not allowed for the resource.`,
      {}
    );
  }
}

module.exports = METHOD_NOT_ALLOWED;
