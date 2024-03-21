const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
    constructor(request, details) {
        super("NotFound", StatusCodes.NOT_FOUND, `Not Found source for ${request}`, details);
    }
}

module.exports = NotFound;