const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class ServerMaintenance extends BaseError {
    constructor(){
        super('Server maintenance', StatusCodes.SERVICE_UNAVAILABLE, 'Server under maintenance', {})
    }
}

module.exports = ServerMaintenance;