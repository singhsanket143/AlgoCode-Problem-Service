const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class GatewayTimeout extends BaseError {
    constructor(detail) {
        super("GatewayTimeout", StatusCodes.GATEWAY_TIMEOUT, "Timeout response from Upstream Server.", detail);
    }
}

module.exports = GatewayTimeout;