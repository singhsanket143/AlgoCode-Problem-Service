const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes")

class ForbiddenError extends BaseError{
    constructor(){
        super("Forbidden Error",StatusCodes.FORBIDDEN,"You do not have permission to access this resource.",{})
    }
}

module.exports = ForbiddenError;