const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class Forbidden extends BaseError {
  constructor(resource, details = {}) {
    super(
      "Forbidden",
      StatusCodes.FORBIDDEN,
      `Invalid Permission : You are not allowed to access the resource ${resource}`,
      details
    );
  }
}

module.exports = Forbidden;