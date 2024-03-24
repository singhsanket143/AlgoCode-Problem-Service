const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class MethodNotAllowed extends BaseError {
    constructor(method) {
        super("MethodNotAllowed", StatusCodes.METHOD_NOT_ALLOWED,
            `Please give correct request`, {}
        );
    }
}

module.exports = MethodNotAllowed;