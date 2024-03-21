const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ServiceUnavailable extends BaseError {
    constructor(serviceName) {
        super("ServiceUnavailable", StatusCodes.SERVICE_UNAVAILABLE, `${serviceName} is currently unavailable`, {});       
    }
}

module.exports = ServiceUnavailable;