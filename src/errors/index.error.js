const BadRequestError = require("./badrequest.error");
const ForbiddenError = require("./forbidden.error");
const InternalServerError = require("./internalServer.error");
const NotFoundError = require("./notFound.error");
const NotImplementedError = require("./notImplemented.error");
const ServiceUnavailableError = require("./serviceUnavailable.error");
const UnauthorizedError = require("./Unauthorized.error");

module.exports = {
    BadRequestError,
    NotImplementedError,
    InternalServerError,
    UnauthorizedError,
    ForbiddenError,
    ServiceUnavailableError,
    NotFoundError
}