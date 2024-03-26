const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class MethodNotAllowed extends BaseError {
    constructor(method, resourceName) {
        super(
            "MethodNotAllowed",
            StatusCodes.METHOD_NOT_ALLOWED,
            `The method ${method} is not allowed for the resource ${resourceName}`,
            {}
        );
    }
}

module.exports = MethodNotAllowed;
