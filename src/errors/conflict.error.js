const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ConflictError extends BaseError {
    constructor(details) {
        super("Conflict Error", StatusCodes.CONFLICT, `Conflicts in the requests present please check once`, details)
    }
}

module.exports = ConflictError;