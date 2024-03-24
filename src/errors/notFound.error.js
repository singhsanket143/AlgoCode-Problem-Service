const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(methodName) {
        super("NotFound", StatusCodes.NOT_FOUND, `${methodName} is not Available`, {});
    }
}

module.exports = NotFound;