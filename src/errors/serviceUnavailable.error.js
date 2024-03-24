const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailable extends BaseError {
    constructor(service) {
        super("Service Unavailable", StatusCodes.SERVICE_UNAVAILABLE,
            `The ${service} service is currently unavailable`, {}
        );
    }
}

module.exports = ServiceUnavailable;