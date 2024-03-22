const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailable extends BaseError {
  constructor(service, details) {
    super(
      "Service Unavailable",
      StatusCodes.SERVICE_UNAVAILABLE,
      `Service Unavailable: The ${service} service that you're requesting is unavailable.`,
      details
    );
  }
}

module.exports = ServiceUnavailable;
