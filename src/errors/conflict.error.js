const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Conflict extends BaseError {
    constructor(details) {
        super("Conflict", StatusCodes.CONFLICT, `Conflict occurred`, details);
    }
}

module.exports = Conflict;
