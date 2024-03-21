const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class Forbidden extends BaseError {
  constructor(resource, details) {
    super(
      "Forbidden",
      StatusCodes.FORBIDDEN,
      `Forbidden: You are not allowed to access the resource ${resource}`,
      details
    );
  }
}

module.exports = Forbidden;
