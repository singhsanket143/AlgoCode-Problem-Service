const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class ServiceUnavialable extends BaseError {
    constructor(detail) {
        super("ServiceUnavialable", StatusCodes.SERVICE_UNAVAILABLE, "Server is not ready to handle the request", detail);
    }
}

module.exports = ServiceUnavialable;