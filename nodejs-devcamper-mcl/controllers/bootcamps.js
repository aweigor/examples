// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const ErrorResponse = require( '../utils/errorResponse' );
const Bootcamp = require("../models/Bootcamp");

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json( { sucess: true, data: bootcamps } );
  } catch (err) {
    next(err);
  }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json( { sucess: true, data: bootcamp } );
  } catch (err) {
    next(err);
  }
  
}


// @desc    Creates bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
  
    res.status(201).json({
      success:true,
      data: bootcamp
    })
  } catch (err) {
    next(err);
  }
  
} 

// @desc    Updates bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate( req.params.id, req.body, {
      new: true,
      runValidators: true
    } )
  
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
  
    res.status(200).json( { success:true, data:bootcamp } );
  } catch (err) {
    next(err);
  }
}

// @desc    Delete bootcamp
// @route   DELTETE /api/v1/bootcamps/:id
// @access  Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete( req.params.id )
  
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
  
    res.status(204).json( { success:true } );
  } catch (err) {
    next(err);
  }
}