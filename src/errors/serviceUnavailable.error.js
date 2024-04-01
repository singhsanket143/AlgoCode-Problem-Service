const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ServiceUnavailable extends BaseError {
    constructor(serviceName, details) {
        super(`ServiceUnavailable`, StatusCodes.SERVICE_UNAVAILABLE, `Service ${serviceName} is currently unavailable`, details);
    }
}

module.exports = ServiceUnavailable;