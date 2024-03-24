const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(detail) {
        super("Unauthorized", StatusCodes.UNAUTHORIZED, "The User is Unothorised", detail);
    }
}

module.exports = Unauthorized;