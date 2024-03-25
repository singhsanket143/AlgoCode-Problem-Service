const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NOT_FOUND extends BaseError {
  constructor(methodName) {
    super(
      "Resource Not Found",
      StatusCodes.NOT_FOUND,
      `Method ${methodName} : The server cannot find the requested resource`,
      {}
    );
  }
}

module.exports = NOT_FOUND;
