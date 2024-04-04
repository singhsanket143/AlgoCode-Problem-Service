const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class TooManyRequests extends BaseError {
    constructor() {
        super(`TooManyRequests`, StatusCodes.TOO_MANY_REQUESTS, `Too many requests attempted at once`, {});
    }
}

module.exports = TooManyRequests;