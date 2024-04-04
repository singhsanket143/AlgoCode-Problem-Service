const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFoundError extends BaseError {
    constructor(req) {
        super(`NotFoundError`, StatusCodes.NOT_FOUND, `Not found the source for ${req}`, {});
    }
}

module.exports = NotFoundError;