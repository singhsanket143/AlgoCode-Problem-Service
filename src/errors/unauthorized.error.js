const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends BaseError {
    constructor(details) {
        super("Unauthorized", StatusCodes.UNAUTHORIZED, "Unauthorized: Hence Access Denied", details)
    }
}

module.exports = UnauthorizedError;