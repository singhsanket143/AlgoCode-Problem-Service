const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ServiceUnavailable extends BaseError {
  constructor(resource, details = {}) {
    super(
      "Service Unavailable",
      StatusCodes.SERVICE_UNAVAILABLE,
      `${resource} is unavailable at this time. Please try again later.`,
      details
    );
  }
}

module.exports = ServiceUnavailable;
