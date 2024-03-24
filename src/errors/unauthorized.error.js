const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(methodName) {
        super("Unauthorized", StatusCodes.UNAUTHORIZED, `You are not Authorized to ${methodName}`, {});
    }
}

module.exports = Unauthorized;