const asyncHandler = require( '../middleware/async.js' );
const ErrorResponse = require( '../utils/errorResponse' );
const Course = require("../models/Course");
const Bootcamp = require('../models/Bootcamp');

// @desc    Get reviews
// @route   GET /api/v1/reviews
// @route   GET /api/v1/bootcamps/:bootcampId/reviews
// @access  Public

exports.getReviews = asyncHandler( async (req, res, next) => {
  if (req.params.bootcampId) {
    const reviews = await Course.find({ bootcamp: req.params.bootcampId });
    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});
