const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `Not Implemented Error: ${methodName} Not Implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
