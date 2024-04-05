const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailable extends BaseError {
  constructor(details) {
    super(
      "503 Service Unavailable",
      StatusCodes.SERVICE_UNAVAILABLE,
      "The server is currently unable to handle the request due to maintenance or overloading. Please try again later.",
      details
    );
  }
}
module.exports = ServiceUnavailable;
