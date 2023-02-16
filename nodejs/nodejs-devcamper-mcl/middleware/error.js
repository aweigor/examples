const ErrorResponse = require("../utils/errorResponse");

const errorHandler = function ( err, req, res, next ) {
  console.log( err.stack.red );
  
  let error = { ...err };

  error.message = err.message;
  
  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found for id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400)
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse( message, 400 );
  }

  res.status(error.statusCode || 500).json({
    success:false,
    error: err.message || 'Server Error'
  })
};

module.exports = errorHandler;