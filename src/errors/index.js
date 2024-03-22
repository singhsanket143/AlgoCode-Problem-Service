module.exports = {
  BadRequest: require("./badrequest.error"),
  InternalServerError: require("./internalServer.error"),
  NotImplemented: require("./notImplemented.error"),
  Forbidden: require("./forbidden.error"),
  Unauthorized: require("./unauthorized.error"),
  NotFound: require("./notFound.error"),
  Conflict: require("./conflict.error"),
  MethodNotAllowed: require("./methodNotAllowed.error"),
  ServiceUnavailable: require("./serviceUnavailable.error"),
};
