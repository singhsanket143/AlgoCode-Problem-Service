const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class BadGateway extends BaseError {
    constructor(details) {
        super(`BadGateway`, StatusCodes.BAD_GATEWAY, `Invalid response recieved on Gateway`, details);
    }
}

module.exports = BadGateway;