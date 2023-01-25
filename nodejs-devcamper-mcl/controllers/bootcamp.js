// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}


// @desc    Creates bootcamp
// @route   GET /api/v1/bootcamps
// @access  Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
}

// @desc    Updates bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   DELTETE /api/v1/bootcamps
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}