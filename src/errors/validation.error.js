const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends BaseError {
  constructor(validationErrors) {
    super(
      "ValidationError",
      StatusCodes.UNPROCESSABLE_ENTITY,
      `Validation failed`,
      { errors: validationErrors }
    );
  }
}

module.exports = ValidationError;
