const express = require('express');

const  { 
  getBootcamps, 
  createBootcamp, 
  updateBootcamp, 
  deleteBootcamp, 
  getBootcamp, 
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require( '../controllers/bootcamps' );

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// Include other resourse routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resourse routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(bootcampPhotoUpload);

router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(createBootcamp)

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)


module.exports = router