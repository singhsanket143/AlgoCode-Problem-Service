const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class FORBIDDEN extends BaseError {
  constructor(methodName) {
    super(
      "Forbidden",
      StatusCodes.FORBIDDEN,
      `Method ${methodName} : The server understood the request but refuses to authorize it`,
      {}
    );
  }
}

module.exports = FORBIDDEN;
