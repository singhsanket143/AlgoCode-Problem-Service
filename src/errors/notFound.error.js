const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resourceName) {
        super("NotFound", StatusCodes.NOT_FOUND, `${resourceName} not found`, {});
    }
}

module.exports = NotFound;
