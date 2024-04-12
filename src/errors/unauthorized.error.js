const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UNAUTHORIZED extends BaseError {
  constructor(methodName) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      `Method ${methodName} : The request requires authentication, but the client has not provided valid credentials.`,
      {}
    );
  }
}

module.exports = UNAUTHORIZED;
