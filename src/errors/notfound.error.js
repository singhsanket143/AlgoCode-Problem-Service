const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(path, detail) {
        super("Not Found", StatusCodes.NOT_FOUND, `${path} Not Found.`, detail);
    }
}

module.exports = NotFound;