const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(details) {
        super("Unauthorized", StatusCodes.UNAUTHORIZED, `Unauthorized access`, details);
    }
}

module.exports = Unauthorized;
