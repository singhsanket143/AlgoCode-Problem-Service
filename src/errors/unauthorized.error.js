const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class Unauthorized extends BaseError {
  constructor(resource, details = {}) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      `Invalid Credentials : You are not authorized to access ${resource}`,
      details
    );
  }
}

module.exports = Unauthorized;
