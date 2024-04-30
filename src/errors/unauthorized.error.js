const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(){
        super('Unauthorized',StatusCodes.UNAUTHORIZED, 'you are not authorized person',{});
    }
}

module.exports = Unauthorized;