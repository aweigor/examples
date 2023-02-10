const asyncHandler = require( '../middleware/async.js' );
const ErrorResponse = require( '../utils/errorResponse' );
const Course = require("../models/Course");
const Bootcamp = require('../models/Bootcamp');

// @desc    Get courses
// @route   GET /api/v1/courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public

exports.getCourses = asyncHandler( async (req, res, next) => {
  if (req.params.bootcampId) {
    const courses = await Course.find({ bootcamp: req.params.bootcampId });
    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
})

// @desc    Get course with id
// @route   GET /api/v1/courses/:id
// @access  Public

exports.getCourse = asyncHandler( async (req, res, next) => {

  if (req.params.bootcampId) {
    const courses = await Course.find({ bootcamp: req.params.bootcampId  });
    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  }

  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse(`No course with the id of ${req.params.id}`))
  } else {
    course.populate( {
      path: 'bootcamp',
      select: 'name, description'
    } )
  }

  res.status(200).json({
    success: true,
    data: course
  })
})

// @desc    Add course
// @route   POST /api/v1/bootcamps/:bootcampId/courses
// @access  Private

exports.addCourse = asyncHandler( async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;
  req.body.user = req.user.id;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`),
      404
    );
  }
  // Make sure that bootcamp owner is logged in user
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${req.user.name} is not authorized to add a course this bootcamp`),
      401
    );
  }

  const course = await Course.create(req.body);

  res.status(200).json({
    success: true,
    data: course
  })
})

// @desc    UpdateCourse
// @route   POST /api/v1/courses/:id
// @access  Public

exports.updateCourse = asyncHandler( async (req, res, next) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
    runValidators: true
  });

  if (!course) {
    return next(new ErrorResponse(`No course with the id of ${req.params.id}`), 404)
  }

  // Make sure that course owner is logged in user
  if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized to update a course this bootcamp`),
      401
    );
  }

  res.status(200).json({
    success: true,
    data: course
  })
})

// @desc    Deltete course by id
// @route   DELETE /api/v1/courses/:id
// @access  Public

exports.deleteCourse = asyncHandler( async (req, res, next) => {
  const course = await (await Course.findById(req.params.id));

  if (!course) {
    return next(new ErrorResponse(`No course with the id of ${req.params.id}`))
  }

  // Make sure that course owner is logged in user
  if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized to delete a course this bootcamp`),
      401
    );
  }

  await course.remove();

  res.status(204).json({
    success: true,
    data: {}
  })
})