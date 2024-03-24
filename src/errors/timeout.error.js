const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class TimeOut extends BaseError {
    constructor(detail) {
        super("TimeOut", StatusCodes.REQUEST_TIMEOUT, "Request Timeout", detail);
    }
}

module.exports = TimeOut;