module.exports = {
    BadGatewayError : require(`./badGateway.error`),
    BadRequestError : require(`./badrequest.error`),
    ConflictError : require(`./conflictError.error`),
    InternalServerError : require(`./internalServer.error`),
    NotFoundError : require(`./notFound.error`),
    NotImplementedError : require(`./notImplemented.error`),
    ServiceUnavailableError : require(`./serviceUnavailable.error`),
    TooManyRequestsError : require(`./tooManyRequests.error`),
    UnauthorizedError : require(`./unauthorizedError.error`)
}