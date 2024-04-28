const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes")

class PaymentRequiredError extends BaseError{
    constructor(){
        super("Payment Error",StatusCodes.PAYMENT_REQUIRED,"Membership is required to access this premium content.",{})
    }
}

module.exports = PaymentRequiredError;