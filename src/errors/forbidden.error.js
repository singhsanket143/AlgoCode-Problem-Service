const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
    constructor(resource) {
        super("Forbidden", StatusCodes.FORBIDDEN, `You are not permissible to access the ${resource}`, {});
    }
}

module.exports = Forbidden;