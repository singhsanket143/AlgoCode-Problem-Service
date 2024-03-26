const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
    constructor(details) {
        super("Forbidden", StatusCodes.FORBIDDEN, `Access Forbidden`, details);
    }
}

module.exports = Forbidden;
