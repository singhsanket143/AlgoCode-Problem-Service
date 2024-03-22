const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');
const NotFound = require("../errors/notfound.error");

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is an exception so no data is going tobe provided
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something went wrong',
        error: err,
        data: {} // because this is an exception so no data is going tobe provided
    });
}

// this will throw an NotFound error if you hit any route which is not defined
const notFound = (req, res, next) => {
    const error = new NotFound(`Not Found - ${req.originalUrl}`);
    res.status(StatusCodes.NOT_FOUND);
    next(error);
};

module.exports = {errorHandler, notFound};