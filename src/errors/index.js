const BadRequestError = require('./badrequest.error.js');
const BadGatewayError = require('./badgateway.error.js');
const ConflictError = require('./conflict.error.js');
const InternalServerError = require('./internalServer.error.js');
const NotFoundError = require('./notFound.error.js');
const NotImplementedError = require('./notImplemented.error.js');
const ServiceUnavailableError = require('./serviceUnavailable.error.js');
const TooManyRequestsError = require('./tooManyRequests.error.js');
const UnauthorizedError = require('./unauthorized.error.js');

module.exports = {
    BadRequestError,
    BadGatewayError,
    ConflictError,
    InternalServerError,
    NotFoundError,
    NotImplementedError,
    ServiceUnavailableError,
    TooManyRequestsError,
    UnauthorizedError
};