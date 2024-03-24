const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadGateway extends BaseError {
    constructor(detail) {
        super("BadGateway", StatusCodes.BAD_GATEWAY, "Bad Gateway", detail);
    }
}

module.exports = BadGateway;