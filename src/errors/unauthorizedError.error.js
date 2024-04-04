const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UnauthorizedError extends BaseError {
    constructor (details) {
        super(`UnauthorizedError`, StatusCodes.UNAUTHORIZED, `Authorization Failed, Access Denied`, details);
    }
}

module.exports = UnauthorizedError;