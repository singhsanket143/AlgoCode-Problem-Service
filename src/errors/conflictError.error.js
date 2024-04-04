const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ConflictError extends BaseError {
    constructor(details) {
        super(`ConflictError`, StatusCodes.CONFLICT, `Conflict present in request, please retry!`, details);
    }
}

module.exports = ConflictError;