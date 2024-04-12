const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class HTTP_VERSION_NOT_SUPPORTED extends BaseError {
  constructor() {
    super(
      "HTTP Version Not Supported",
      StatusCodes.HTTP_VERSION_NOT_SUPPORTED,
      `The server does not support the HTTP protocol version used in the request`,
      {}
    );
  }
}

module.exports = HTTP_VERSION_NOT_SUPPORTED;
