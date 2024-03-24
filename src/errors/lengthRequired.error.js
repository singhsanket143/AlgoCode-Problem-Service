const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class LengthRequired extends BaseError {
    constructor(resource) {
        super("LENGTH REQUIRED", StatusCodes.LENGTH_REQUIRED, `Serever rejected the request`, {});
    }
}

module.exports = LengthRequired;