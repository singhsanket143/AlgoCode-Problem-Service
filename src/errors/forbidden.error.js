const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
    constructor(details) {
        super("Forbidden", StatusCodes.FORBIDDEN, "Request Forbidden", details);
    }
}

module.exports = Forbidden;